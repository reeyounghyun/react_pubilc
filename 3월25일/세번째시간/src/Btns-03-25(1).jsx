import { useState } from 'react';

function Btns({ frame, len, prev, next }) {
	let [Num, setNum] = useState(0);

	const moveCard = (count) => {
		setNum(count);
		frame.current.style.transform = `rotate(${(360 / len) * Num}deg)`;
	};

	return (
		<>
			<button
				className='prev'
				onClick={() => {
					//전체 section을 회전하기 위한 카운트값 변경
					moveCard(++Num);
					//현재 카드가 회전될때마다 활성화되야할 순번을 변경
					prev();
				}}
			>
				prev
			</button>

			<button
				className='next'
				onClick={() => {
					moveCard(--Num);
					next();
				}}
			>
				next
			</button>
		</>
	);
}

export default Btns;
