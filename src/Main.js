
import './assets/styles/Main.css';
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
          <h2 class="section-title">
            This week specials!
          </h2>
          <button class="section-menu-button">Online menu</button>
          <article class="product-item item-1">
            <div class="product-photo">
              <img src={greekSaladPicture} alt="greek salad picture"/>
            </div>
            <h3 class="product-title">Greek salad</h3>
            <div class="product-price">$12.99</div>
            <p class="product-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <a class="action">Order a delivery <img src={motocycleSVG}/></a>
          </article>
          <article class="product-item item-2">
            <div class="product-photo">
              <img src={bruschettaPicture} alt="greek salad picture"/>
            </div>
            <h3 class="product-title">Bruchetta</h3>
            <div class="product-price">$5.99</div>
            <p class="product-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
            <a class="action">Order a delivery <img src={motocycleSVG}/></a>
          </article>
          <article class="product-item item-3">
            <div class="product-photo">
              <img src={lemonDesertPicture} alt="lemon Desert Picture"/>
            </div>
            <h3 class="product-title">Lemon Dessert</h3>
            <div class="product-price">$5.00</div>
            <p class="product-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a class="action">Order a delivery <img src={motocycleSVG}/></a>
          </article>
        </section>
        <section id="testimonials">
          <h2 class="section-title">Testimonials</h2>
          <article class="review-item review-1">
            <h4 class="review-title">Rating 5.0 </h4>
            <div class="stars-icon-block">
              <img src={starIcon} alt="star icon"/>
            </div>
            <div class="person-photo-block">
              <img src={ladyPhoto} alt="person picture"/>
            </div>
            <h5 class="person-name">Raychel</h5>
            <div class="review-date">2 months ago</div>
            <p class="review-text">
               Cozy atmosphere perfect for a night out.
            </p>
          </article>
          <article class="review-item review-2">
            <h4 class="review-title">Rating 5.0 </h4>
            <div class="stars-icon-block">
              <img src={starIcon} alt="star icon"/>
            </div>
            <div class="person-photo-block">
              <img src={teenagerPhoto} alt="person picture"/>
            </div>
            <h5 class="person-name">Hao</h5>
            <div class="review-date">3 weeks ago</div>
            <p class="review-text">
              Loved the pasta and the vibe!
            </p>
          </article>
          <article class="review-item review-3">
            <h4 class="review-title">Rating 5.0 </h4>
            <div class="stars-icon-block">
              <img src={starIcon} alt="star icon"/>
            </div>
            <div class="person-photo-block">
              <img src={mamPhoto} alt="person picture"/>
            </div>
            <h5 class="person-name">Nana</h5>
            <div class="review-date">1 week ago</div>
            <p class="review-text">
              I adore the friendly service.
            </p>
          </article>
          <article class="review-item review-4">
            <h4 class="review-title">Rating 5.0 </h4>
            <div class="stars-icon-block">
              <img src={starIcon} alt="star icon"/>
            </div>
            <div class="person-photo-block">
              <img src={youngManPhoto} alt="person picture"/>
            </div>
            <h5 class="person-name">Jose</h5>
            <div class="review-date">yesterday</div>
            <p class="review-text">
              Staff are very welcoming.
            </p>
          </article>
        </section>
        <section id="about-restaurant">
          <h1 class="section-title">Little Lemon</h1>
          <h3 class="section-subtitle">Chicago</h3>
          <p class="section-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
          </p>
          <div class="pictures">
            <div class="picture-1">
              <img src={MarioAndAdrian} alt="Photo of Adrian and Marion"/>
            </div>
            <div class="picture-2">
              <img src={SummerTerrace} alt="Photo of our Summer Terrace"/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
