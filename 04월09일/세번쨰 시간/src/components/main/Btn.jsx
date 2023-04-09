import { useRef, useEffect, useState } from 'react';
import Anime from '../../asset/anime';

function Btns() {
	const [Num, setNum] = useState(0);
	const btnRef = useRef(null);
	const pos = useRef([]);

	//미션1 - 컴포넌트 마운트시 첫번째 버튼 강제 활성화
	//미션2 - 버튼 활성화구문을 반복문 처리
	//미션3 - 현재 이벤트 연결문에서의 문제점 찾기
	//미션4 - 버튼 활성화 시점의 문제점 찾기

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);
		//window객체에 이벤트 연결시 라우터로 다른 서브페이지에서 컴포넌트 마운트 불필요한 이벤트 동각이 되므로
		//헤당 컴포넌트가 urmount 될때 window에 연결된 이벤트 제거(중요)
		
	}, []);

	useEffect(() => {
		getPos();
		window.removeEventListener('resize', getPos);
		window.removeEventListener('scroll', activation);
	}, []);

	//브라우저 리사이즈 호출되며 각 섹션별 세로 위치값 연산 함수
	const getPos = () => {
		console.log('getpos')
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		setNum(pos.current.length);
	};

	//브라우저 스크롤시 호출되며 현재 스크롤 위치값에 따라 조건문으로 버튼활성화 함수
	const activation = () => {
		console.log('activation')
		const scroll = window.scrollY;
		const btns = btnRef.current.children;

		if (scroll >= pos.current[0]) {
			for (const btn of btns) btn.classList.remove('on');
			btns[0].classList.add('on');
		}
		if (scroll >= pos.current[1]) {
			for (const btn of btns) btn.classList.remove('on');
			btns[1].classList.add('on');
		}
		if (scroll >= pos.current[2]) {
			for (const btn of btns) btn.classList.remove('on');
			btns[2].classList.add('on');
		}
		if (scroll >= pos.current[3]) {
			for (const btn of btns) btn.classList.remove('on');
			btns[3].classList.add('on');
		}
	};

	return (
		<ul className='scroll_navi' ref={btnRef}>
			{Array(Num)
				.fill()
				.map((_, idx) => {
					let isOn = '';
					idx === 0 && (isOn = 'on');
					return (
						<li
							className={isOn}
							key={idx}
							onClick={() => {
								new Anime(window, {
									prop: 'scroll',
									value: pos.current[idx],
									duration: 500,
								});
							}}
						></li>
					);
				})}
		</ul>
	);
}

export default Btns;