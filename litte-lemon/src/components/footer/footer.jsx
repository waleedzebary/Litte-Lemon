const  Footer = () => {
    return (
        <>
      <footer>
        <div className="footer-section">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Address: 1234 Lemon Street</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        <div className="footer-section">
          <h4>Social Media Links</h4>
          <p>Facebook | Instagram | Twitter</p>
        </div>
      </footer>
      </>
    );
  }
  
  export default Footer;
  