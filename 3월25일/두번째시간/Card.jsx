function Card({ data, len, idx, Active }) {
	const style = {
		transform: `rotate(${(360 / len) * idx}deg) translateY(-100vh)`,
	};

	return (
		<article style={style} className={Active === idx ? 'on' : ''}>
			<div className='inner'>
				<div className='pic'>
					<img src={`${process.env.PUBLIC_URL}/img/${data}.jpg`} alt={data} />
				</div>
				<h2>{data}</h2>
			</div>
		</article>
	);
}

export default Card;
