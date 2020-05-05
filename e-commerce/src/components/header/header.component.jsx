import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/images/icons/original.svg';

const Header = () => (
    <React.Fragment>
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo class='logo'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
            </div>
        </div>
    </React.Fragment>
);
export default Header;