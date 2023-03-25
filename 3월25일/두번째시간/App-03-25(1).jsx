import Footer from './Footer';
import Header from './Header';
import Section from './Section';
import Btns from './Btns';
import { useRef, useState } from 'react';
import './scss/style.scss';

function App() {
	const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];
	const frame = useRef(null);

	//활성화될 패널의 순번이 담길 state생성
	let [Active, setActive] = useState(0);

	console.log(Active);

	//기존의 활성화 순번을 초기값으로 해서 prev버튼 클릭시 활성화될 순번을 반환하는 함수
	const prev = () => {
		//setActive함수의 인수값으로 state값을 바로 변경하는 것이 아닌 상황에 따라 다른 값을 리턴해주는 함수를 전달
		//이유 - 기존값을 계속 빼주기만 하는것이 아니라 더이상 뺼 순번이 없을때는 마지막 순번으로 되돌리는 로직을 처리하기 위함
		setActive((Active) => (Active === 0 ? (Active = arr.length - 1) : --Active));
	};

	const next = () => {
		setActive((Active) => (Active === arr.length - 1 ? (Active = 0) : ++Active));
	};

	return (
		<>
			<Header />
			<Section frame={frame} arr={arr} Active={Active} />
			<Footer />
			<Btns frame={frame} len={arr.length} prev={prev} next={next} />
		</>
	);
}

export default App;
