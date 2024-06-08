
import Logo from './assets/images/logo-footer.png';

function Footer() {
  return (
    <>
      <footer>
        <img src={Logo} alt="Logo footer, picture of lemon with text little lemon"/>
        <ul>
          <li><b>Doormat Navigation</b></li>
          <li><a href='/' role='navigation'>Home</a></li>
          <li><a href='/' role='navigation'>About</a></li>
          <li><a href='/' role='navigation'>Menu</a></li>
          <li><a href='/' role='navigation'>Reservations</a></li>
          <li><a href='/' role='navigation'>Order Online</a></li>
          <li><a href='/' role='navigation'>Login</a></li>
        </ul>
        <ul>
          <li><b>Doormat Navigation</b></li>
          <li><a href='/' role='navigation'>Email</a></li>
          <li><a href='/' role='navigation'>Phone number</a></li>
          <li><a href='/' role='navigation'>Address</a></li>
        </ul>
        <ul>
          <li><b>Social Media Links</b></li>
          <li><a href='/' role='navigation'>Instagram</a></li>
          <li><a href='/' role='navigation'>Twitter</a></li>
          <li><a href='/' role='navigation'>Facebook</a></li>

        </ul>
      </footer>
    </>
  );
}

export default Footer;
