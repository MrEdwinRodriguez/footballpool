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
import LogoText from '../app/assets/img/logo-text.png';
import UserLoginForm from '../features/user/UserLoginForm';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                </Nav>
				<UserLoginForm/>
            </Collapse>
        </Navbar>
    );
};

export default Header;