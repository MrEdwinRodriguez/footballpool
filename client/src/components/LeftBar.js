import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NucampLogo from '../logo.svg';
import UserLoginForm from '../features/user/UserLoginForm';


const LeftBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      
	<Navbar dark color='primary' vertical='sm' style={{ width: "10%", position: "absolute", bottom: 0, top: 0, float: "left"}}>
		<Nav>
			<NavItem>
				<NavLink className='nav-link' to='/'>
					<i className='fa fa-home fa-lg' /> Home
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className='nav-link' to='/'>
					<i className='fa fa-home fa-lg' /> Home
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className='nav-link' to='/'>
					<i className='fa fa-home fa-lg' /> Home
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className='nav-link' to='/'>
					<i className='fa fa-home fa-lg' /> Home
				</NavLink>
			</NavItem>
		</Nav>
	</Navbar>

           



    );
};

export default LeftBar;