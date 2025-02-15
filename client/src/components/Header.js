import { useState } from 'react';
import { useSelector } from 'react-redux';
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
import LogoText from '../app/assets/img/logo-text.png';
import UserLoginForm from '../features/user/UserLoginForm';

import { selectCurrentUser } from '../features/user/userSlice';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <div className='ms-5' href='/'>
                <NavLink className='nav-link' to='/'>
                    <img src={LogoText} alt='nucamp logo' className='float-start logo-long' />
                </NavLink>
                {/* <h1 className='mt-1'>Play Book Picks</h1> */}
            </div>
            
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/mygames'>
                            <i className='fa fa-list fa-lg' /> My Games
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/findgames'>
                            <i className='fa fa-info fa-lg' /> Find Games
                        </NavLink>
                    </NavItem>
	
						<NavItem>
							<NavLink className='nav-link' to='/comishtools'>
								<i class="fa fa-sitemap"></i> Commissioner Tools
							</NavLink>
						</NavItem>
             

                    {currentUser ? (
						<NavItem>
							<NavLink className='nav-link' to='/findgames'>
								<i class="fa fa-user" aria-hidden="true"></i> My Profile
							</NavLink>
						</NavItem>
                    	) : ( "")
					}
                </Nav>
				<UserLoginForm/>
            </Collapse>
        </Navbar>
    );
};

export default Header;