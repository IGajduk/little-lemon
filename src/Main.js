
import './assets/styles/Main.css';
import './assets/styles/Main_section/About.css';
import './assets/styles/Main_section/Specials.css';
import './assets/styles/Main_section/Testimonials.css';
import greekSaladPicture from './assets/images/greek salad.jpg';
import motocycleSVG from './assets/images/moto-cycle.svg';
import bruschettaPicture from './assets/images/bruchetta.svg';
import lemonDesertPicture from './assets/images/lemon dessert.jpg';
import starIcon from './assets/images/star.jpg';
import ladyPhoto from './assets/images/women.jpg';
import teenagerPhoto from './assets/images/teenager.jpg';
import mamPhoto from './assets/images/grandmother.jpg';
import youngManPhoto from './assets/images/young_man.jpg';
import MarioAndAdrian from './assets/images/Mario and Adrian A.jpg';
import SummerTerrace from './assets/images/restaurant.jpg';
function Main() {
  return (
    <>
      <main>
        <section id="specials">
          <h2 className="section-title">
            This week specials!
          </h2>
          <button className="section-menu-button action-button">Online menu</button>
          <article className="product-item item-1">
            <div className="product-photo">
              <img src={greekSaladPicture} alt="greek salad picture"/>
            </div>
            <h3 className="product-title">Greek salad</h3>
            <div className="product-price">$12.99</div>
            <p className="product-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <a className="action">Order a delivery <img src={motocycleSVG}/></a>
          </article>
          <article className="product-item item-2">
            <div className="product-photo">
              <img src={bruschettaPicture} alt="greek salad picture"/>
            </div>
            <h3 className="product-title">Bruchetta</h3>
            <div className="product-price">$5.99</div>
            <p className="product-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
            <a className="action">Order a delivery <img src={motocycleSVG}/></a>
          </article>
          <article className="product-item item-3">
            <div className="product-photo">
              <img src={lemonDesertPicture} alt="lemon Desert Picture"/>
            </div>
            <h3 className="product-title">Lemon Dessert</h3>
            <div className="product-price">$5.00</div>
            <p className="product-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a className="action">Order a delivery <img src={motocycleSVG}/></a>
          </article>
        </section>
        <section id="testimonials">
          <h2 className="section-title">Testimonials</h2>
          <article className="review-item review-1">
            <div className="stars-icon-block">
              <i className="star"></i>
              <i className="star"></i>
              <i className="star"></i>
              <i className="star"></i>
              <i className="star"></i>
            </div>
            <div className="person-photo-block">
              <img src={ladyPhoto} alt="person picture"/>
            </div>
            <h5 className="person-name">Raychel</h5>
            <div className="review-date">2 months ago</div>
            <p className="review-text">
               Cozy atmosphere perfect for a night out.
            </p>
          </article>
          <article className="review-item review-2">
            <div className="person-photo-block">
              <img src={teenagerPhoto} alt="person picture"/>
            </div>
            <h5 className="person-name">Hao</h5>
            <div className="review-date">3 weeks ago</div>
            <p className="review-text">
              Loved the pasta and the vibe!
            </p>
            <div className="stars-icon-block">
              <i className="star"></i>
              <i className="star"></i>
              <i className="star"></i>
              <i className="star"></i>
              <i className="star"></i>
            </div>
          </article>
          <article className="review-item review-3">
            <div className="person-photo-block">
              <img src={mamPhoto} alt="person picture"/>
            </div>
            <h5 className="person-name">Nana</h5>
            <div className="review-date">1 week ago</div>
            <p className="review-text">
              I adore the friendly service.
            </p>
            <div className="stars-icon-block">
              <i className="star"></i>
              <i className="star"></i>
              <i className="star"></i>
              <i className="star"></i>
              <i className="star"></i>
            </div>
          </article>
          <article className="review-item review-4">
            <div className="person-photo-block">
              <img src={youngManPhoto} alt="person picture"/>
            </div>
            <h5 className="person-name">Jose</h5>
            <div className="review-date">yesterday</div>
            <p className="review-text">
              Staff are very welcoming.
            </p>
            <div className="stars-icon-block">
              <i className="star"></i>
              <i className="star"></i>
              <i className="star"></i>
              <i className="star"></i>
              <i className="star"></i>
            </div>
          </article>
        </section>
        <section id="about-restaurant">
          <h1 className="section-title">
            Little Lemon
          </h1>
          <h3 className="section-subtitle">Chicago</h3>
          <p className="section-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
          </p>
          <div className="pictures">
            <div className="picture-1">
              <img src={MarioAndAdrian} alt="Photo of Adrian and Marion"/>
            </div>
            <div className="picture-2">
              <img src={SummerTerrace} alt="Photo of our Summer Terrace"/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
