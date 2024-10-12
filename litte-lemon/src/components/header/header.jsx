import logo from '../../images/logo.jpg';
import './header.css';

const Header = () => {
    return (
        <>
      <header className="header">
      <div className="logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
    </header>
      </>
    );
  }

export default Header;
