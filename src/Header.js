
import './assets/styles/Header.css';
import HeaderPicture from './assets/images/restauranfood.jpg'

function Header() {
  return (
    <>
      <header>
        <article id="header-content">
          <section id="header-info">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>
              Reserve a table
            </button>
          </section>
          <section id="header-photo-block">
            <img src={HeaderPicture} alt="Photo of bruskets"/>
          </section>
        </article>
      </header>
    </>
  );
}

export default Header;
