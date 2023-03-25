import Card from './Card';

function Section({ frame, arr, Active }) {
	return (
		<section ref={frame}>
			{arr.map((data, idx) => {
				return <Card key={idx} data={data} len={arr.length} idx={idx} Active={Active} />;
			})}
		</section>
	);
}

export default Section;

/*
	Props Drilling 
	상위컴포넌트에서 하위컴포넌트로 prop값을 전달하기 위해서 불필요하게 많은 중간 컴포넌트들을 경유하는 과정

	위와 같은 Props Drilling을 해결하기 위해 컴포넌트에 직접 props를 일일이 전달하는게 아닌 
	컴포넌트 외부에서 전역으로 원하는 값을 바로 전달할 수 있는전역 상태관리가 필요해짐
	-Redux, Redux-saga, Redux-toolkit, (mobx), Recoil
*/
