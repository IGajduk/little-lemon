

import 'src/components/Footer/Footer.css';
import Logo from 'src/assets/images/logo-footer.png';

const Footer = () => (
    <>
      <footer>
        <img src={Logo} alt="Logo footer, picture of lemon with text little lemon"/>
        <ul>
          <h6>Doormat Navigation</h6>
          <li><a href='/' role='navigation'>Home</a></li>
          <li><a href='/' role='navigation'>About</a></li>
          <li><a href='/' role='navigation'>Menu</a></li>
          <li><a href='/' role='navigation'>Reservations</a></li>
          <li><a href='/' role='navigation'>Order Online</a></li>
          <li><a href='/' role='navigation'>Login</a></li>
        </ul>
        <ul>
          <h6>Contact</h6>
          <li><a href='/' role='navigation'>Email</a></li>
          <li><a href='/' role='navigation'>Phone number</a></li>
          <li><a href='/' role='navigation'>Address</a></li>
        </ul>
        <ul>
          <h6>Social Media Links</h6>
          <li><a href='/' role='navigation'>Instagram</a></li>
          <li><a href='/' role='navigation'>Twitter</a></li>
          <li><a href='/' role='navigation'>Facebook</a></li>
        </ul>
        <p className='font-family-licence'>Fonts used on this website are licensed under the <a href="https://openfontlicense.org/open-font-license-official-text/" target="_blank">Open Font License</a>.</p>
      </footer>
    </>
  );

export default Footer;
