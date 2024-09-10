import logo from '../../images/logo.jpg';
import './navbar.css';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='image'>
                    <img className='img' src={logo} alt="Logo" />
                </div>
                <div className="box">
                    <ul className="navbar">
                        <li className="text-wrapper"><a href="/">Home</a></li>
                        <li className="div"><a href="About">About</a></li>
                        <li className="text-wrapper-2"><a href="Menu">Menu</a></li>
                        <li className="text-wrapper-3"><a href="Reservations">Reservations</a></li>
                        <li className="text-wrapper-4"><a href="Order online">Order online</a></li>
                        <li className="text-wrapper-5"><a href="Login">Login</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;