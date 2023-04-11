import { NavLink } from "react-router-dom";


export const Menu = ({ isAdmin, showMenu }) => {
  return (
    <div className={showMenu ? "menu" : "menu--hidden"}>
      {isAdmin ? <NavLink className="menu__link" to='/users'>editing users</NavLink> : null}
      <NavLink to='/' className="menu__link">Homepage</NavLink>
      <NavLink to='/trips' className="menu__link">Trips</NavLink>
      <NavLink className="menu__link">Settings</NavLink>
    </div>
  );
}