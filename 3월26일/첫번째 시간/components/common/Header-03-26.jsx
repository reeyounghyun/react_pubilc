import { Link, NavLink } from 'react-router-dom';

/*
	NavLink는 현재 url과 to가 가르키는 링크가 일치하면 activeStyle props이 활성화되면서 메뉴활성화 가능
	-만약 클래스로 활성화 시키고 싶을떄는 activeClassName사용
*/

function Header() {
	const active = { color: 'aqua' };
	//const active = 'on';

	return (
		<header>
			<h1>
				<Link to='/'>DCODELAB</Link>
			</h1>

			<ul id='gnb'>
				<li>
					<NavLink to='/department' activeStyle={active}>
						Department
					</NavLink>
				</li>
				<li>
					<NavLink to='/community' activeStyle={active}>
						Community
					</NavLink>
				</li>
				<li>
					<NavLink to='/gallery' activeStyle={active}>
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeStyle={active}>
						Youtube
					</NavLink>
				</li>
				<li>
					<NavLink to='/location' activeStyle={active}>
						Location
					</NavLink>
				</li>
				<li>
					<NavLink to='/members' activeStyle={active}>
						Members
					</NavLink>
				</li>
			</ul>
		</header>
	);
}

export default Header;
