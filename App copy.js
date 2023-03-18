import { useState } from 'react';

const boxStyle = {
	width: 200,
	height: 200,
	backgorundColor: 'aqua',
	margin: 50,
	transitionDuration: ' 0.5s',
};

function App() {
	const [Num, setNum] = useState(0);
	const deg = 45;
	const box = useState('abc');
	console.log(box);

	return (
		<div className='wrap'>
			<button
				onClick={() => {
					setNum(Num - 1);
					console.log(Num * deg);
					box.Current.style.transform = 'rotate(${Num * deg}deg)';
				}}
			>
				left
			</button>

			<button
				onClick={() => {
					setNum(Num + 1);
					console.log(Num * deg);
					box.current.style.transform = 'rotate(${Num * deg)deg';
				}}
			>
				right
			</button>
			<p>[Num]</p>

			<article style={boxStyle}></article>
		</div>
	);
}
export default App;

/*
useRef
아직 realDOM으로 변경되지 않은 viryalDOM을 미리 객체에 담아서 참조

const 변수 - useRef(초기값);
- 변수에는 useRef의 초기값을 활용해서 빈 참조객체가 생성됨
- 이떄 해당 객체안에는 current라는 키값이 자동 생성되면서 초기값이 담김
-이렇게 만들어든 빈 참조객체를 원하는 가상돔 요소에 ref속성을 지정해서 참조가능
-참조된 가상요소는 이벤트 발생시 자유롭게 호출가능
- useRef는 보통 이벤트 연결시 제어해야 되는 가상돔을 참조할때 주로 쓰임

사용순서
1- 변수에 useRef(null)을 대입해서 일단은 빈 참조객체 생성
2- 원하는 가상돔 요소에 ref-[참조객체] 로 연결
3- 참조객체,  current 형식으로 가상돔 요소를 자유롭게 불러와서 호출
*/

/*
전위 연산자, 후위연산자 차이점

let num = 0 ;

num ++ (후임증감연산자) vs ++num(전임증감연산자)
후임증감연산자 : 초기값을 먼저활용하고 그다음에 값을 증가
전위증감연산자 : 초기값을 먼저 연산해서 활용



*/
