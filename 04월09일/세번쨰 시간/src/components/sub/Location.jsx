import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';

function Location() {
	const [Traffic, setTraffic] = useState(false);
	const [Location, setLocation] = useState(null);
	const [Index, setIndex] = useState(2);
	const container = useRef(null);
	const { kakao } = window;
	const info = [
		{
			title: '삼성역 코엑스',
			latlng: new kakao.maps.LatLng(37.51100661425726, 127.06162026853143),
			imgSrc: `${process.env.PUBLIC_URL}/img/marker1.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '넥슨 본사',
			latlng: new kakao.maps.LatLng(37.40211707077346, 127.10344953763003),
			imgSrc: `${process.env.PUBLIC_URL}/img/marker2.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '서울 시청',
			latlng: new kakao.maps.LatLng(37.5662952, 126.9779451),
			imgSrc: `${process.env.PUBLIC_URL}/img/marker3.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];

	/*
		const option = {
			center: new kakao.maps.LatLng(37.51100663932431, 127.06157219841344 ),
			level: 3,
		};
	*/

	//마커위치정보 인스턴스 생성
	// const markerPosition = 
	//마커이미지 정보값
	// const imageSrc = info[index].imgSrc;
	// const imageSize = info[index].imgSize;
	// const imageOption = info[index].imgPos;

	/*
	const imageSrc = `${process.env.PUBLIC_URL}/img/marker1.png`;// 마커이미지의 주소입니다    
    const imageSize = new kakao.maps.Size(232, 99); // 마커이미지의 크기입니다
    const imageOption = {offset: new kakao.maps.Point(116, 99)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
	*/

	//마커이미지 정보 이미지 생성
	// const markerImage = new kakao.maps.MarkerImage(info[index].imgSrc, info[index].imgSize, info[index].imgPos
	 //	); 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다

	//위치정보 인스턴스를 인수로 전달해 마커 인스턴스 생성
	const marker = new kakao.maps.Marker({
		position: option.center,
		image: new kakao.maps.MarkerImage(info[Index].imgSrc, info[Index].imgSize, info[Index].imgPos),
	});


	/*
	useEffect(() => {
		const mapInstance = new kakao.maps.Map(container.current, option);
		marker.setMap(mapInstance);

		Traffic
		// 지도에 교통정보를 표시하도록 지도타입을 추가합니다
		? mapInstance.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 
		//지도에 교통정보를 제거하도록 지도타입을 추가합니다.
		? mapInstance.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 
	}, []);
	*/

	useEffect(() => {
		const mapInstance = new kakao.maps.Map(container.current, option);
		marker.setMap(mapInstance);
		setLocation(mapInstance);
	}, [Index]);

		
	useEffect(() => {
		//첫 번째 랜더링 사이클시에는 Location값이 null이므로 (Optional Chaining을 활용해) 해당값이 있을때에만 메서드 호출
		Traffic
			? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		/*
		<Layout name={'Location'}>
			<article id='map' ref={container}></article>

			<ul>
				<li onClick={() => setTraffic(true)}>Traffic ON</li>
				<li onClick={() => setTraffic(false)}>Traffic OFF</li>
			</ul>
		</Layout>
		*/
		<Layout name={'Location'}>
		<article id='map' ref={container}></article>

		<nav>
			<button onClick={() => setTraffic(!Traffic)}>
				{Traffic ? 'Traffic ON' : 'Traffic OFF'}
			</button>

			<ul>
				{info.map((el, idx) => {
					return (
						<li className={idx === Index ? 'on' : ''} key={idx} onClick={() => setIndex(idx)}>
							{el.title}
						</li>
					);
				})}
			</ul>
		</nav>
	</Layout>

	);
}

export default Location;