import { Link, NavLink } from "react-router-dom";
import navLogo from '../../../assets/icons/logo.svg';
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { logOut, user } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.error(err))
  }
  const navItems = <>
    <NavLink><li><Link to='/'>Home</Link></li></NavLink>
    <NavLink><li><Link to='/about'>About</Link></li></NavLink>
    <NavLink><li><Link to='/services'>Services</Link></li></NavLink>
    <NavLink><li><Link to='/blog'>Blog</Link></li></NavLink>
    <NavLink><li><Link to='/contact'>Contact</Link></li></NavLink>

    {user?.email ?
      <>
        <li><Link to="/booking">My Bookings</Link></li>
        <li><button onClick={handleLogOut}>Logout</button></li>
      </>
      : <NavLink><li><Link to='/login'>Login</Link></li></NavLink>
    }
  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to='/' className="">
            <img src={navLogo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-warning uppercase">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;