import './assets/styles/Nav.css';
import logo from './assets/images/logo-nav.png'
import menuIcon from './assets/images/menu.svg'
import basketIcon from './assets/images/basket .svg'

function Nav() {
  return (
    <>
      <nav>
        <img id="menu-button" src={menuIcon} alt="menu icon" />
        <img id="header-logo" src={logo} alt='Websito logo image'/>
        <ul>
          <li><a href='/' role='navigation'>Home</a></li>
          <li><a href='/' role='navigation'>About</a></li>
          <li><a href='/' role='navigation'>Menu</a></li>
          <li><a href='/' role='navigation'>Reservations</a></li>
          <li><a href='/' role='navigation'>Order online</a></li>
          <li><a href='/' role='navigation'>Login</a></li>
        </ul>
        <img id="basket-button" src={basketIcon} alt="menu icon" />
      </nav>
    </>
  );
}

export default Nav;
