import './assets/styles/Nav.css';
import Logo from './assets/images/logo-nav.png'

function Nav() {
  return (
    <>
      <nav>
        <img src={Logo} alt='Websito logo image'/>
        <ul>
          <li><a href='/' role='navigation'>Home</a></li>
          <li><a href='/' role='navigation'>About</a></li>
          <li><a href='/' role='navigation'>Menu</a></li>
          <li><a href='/' role='navigation'>Reservations</a></li>
          <li><a href='/' role='navigation'>Order online</a></li>
          <li><a href='/' role='navigation'>Login</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
