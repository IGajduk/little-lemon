import 'src/components/Nav/Nav.css';
import logo from 'src/assets/images/logo-nav.png'
import menuIcon from 'src/assets/images/menu.svg'
import basketIcon from 'src/assets/images/basket .svg'

function Nav() {
  return (
    <>
      <nav>
        <img id="menu-button" src={menuIcon} alt="menu icon" />
        <img id="header-logo" src={logo} alt='Website logo'/>
        <ul>
          <li><a href='/' role='navigation' aria-label="On Click">Home</a></li>
          <li><a href='/' role='navigation' aria-label="On Click">About</a></li>
          <li><a href='/' role='navigation' aria-label="On Click">Menu</a></li>
          <li><a href='/' role='navigation' aria-label="On Click">Reservations</a></li>
          <li><a href='/' role='navigation' aria-label="On Click">Order online</a></li>
          <li><a href='/' role='navigation' aria-label="On Click">Login</a></li>
        </ul>
        <img id="basket-button" src={basketIcon} alt="menu icon" />
      </nav>
    </>
  );
}

export default Nav;
