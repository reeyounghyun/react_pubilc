import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';

function Location() {
	const container = useRef(null);
	const { kakao } = window;
	const option = {
		center: new kakao.maps.LatLng(37.51100663932431, 127.06157219841344 ),
		level: 3,
	};
	//마커위치정보 인스턴스 생성
	const markerPosition = option.center;

	const imageSrc = `${process.env.PUBLIC_URL}/img/marker1.png`;
	 // 마커이미지의 주소입니다    
    const imageSize = new kakao.maps.Size(232, 99); 
	// 마커이미지의 크기입니다
    const imageOption = {offset: new kakao.maps.Point(116, 99)}; 
	// 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

	//마커이미지 정보 이미지 생성
	// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
	const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

	//위치정보 인스턴스를 인수로 전달해 마커 인스턴스 생성
	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage // 마커이미지 설정 
	});

	useEffect(() => {
		const mapInstance = new kakao.maps.Map(container.current, option);
		marker.setMap(mapInstance);
		// 지도에 교통정보를 표시하도록 지도타입을 추가합니다
		mapInstance.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 
	}, []);

	return (
		<Layout name={'Location'}>
			<article id='map' ref={container}></article>
		</Layout>
	);
}

export default Location;