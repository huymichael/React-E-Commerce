import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/images/icons/original.svg';
import {auth} from '../../firebase/firebase.util';

const Header = ({currentUser}) => (
    <React.Fragment>
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                        :
                        <Link to='/signin' className='option'>SIGN IN</Link>
                }
            </div>
        </div>
    </React.Fragment>
);
export default Header;