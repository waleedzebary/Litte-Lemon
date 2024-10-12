import './navbar.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order">Order online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </>
    );
  }

export default Nav;
