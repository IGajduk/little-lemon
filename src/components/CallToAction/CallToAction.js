
import 'src/components/CallToAction/CallToAction.css';
import HeaderPicture from 'src/assets/images/restauranfood.jpg';
import {Link} from 'react-router-dom';

function CallToAction() {
  return (
    <>
      <header>
          <h1 className='page-title'>Little Lemon</h1>
          <h3 className='subtitle'>Chicago</h3>
          <p className='header-text'>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
          <Link to="/booking">
            <button className='action-button'>
              Reserve a table
            </button>
          </Link>
          <div className='empty-block'></div>
          <section id="header-photo-block">
            <img src={HeaderPicture} alt="Photo of attractive bruskets on the black board"/>
          </section>
      </header>
    </>
  );
}

export default CallToAction;
