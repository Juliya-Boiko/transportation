import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Burger } from '../../assets/burger.svg';
import { ReactComponent as Close } from '../../assets/close.svg';
import { admin } from 'constants/admin';
import { Menu } from 'components/Menu';
import { NavLink } from "react-router-dom";

export const Header = () => {
  const currentUserId = useSelector(state => state.auth.uid);
  const [showMenu, setShowMenu] = useState(false);
  const isAdmin = admin.id === currentUserId;

  return (
    <header className="header">
      <button type='button' onClick={() => setShowMenu(prevState => !prevState)} className='header__menu-btn'>
        {showMenu ? <Close /> : <Burger />}
      </button>

      <nav className='header__nav'>
        {isAdmin ? <NavLink className="header__link">editing users</NavLink> : null}
        <NavLink to='/' className="header__link">Homepage</NavLink>
        <NavLink to='/trips' className="header__link">Trips</NavLink>
        <NavLink className="header__link">Settings</NavLink>
      </nav>
      
      <Menu isAdmin={isAdmin} showMenu={showMenu} />
    </header>
  );
}