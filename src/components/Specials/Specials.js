
import 'src/components/Specials/Specials.css';
import greekSaladPicture from 'src/assets/images/greek salad.jpg';
import motocycleSVG from 'src/assets/images/moto-cycle.svg';
import bruschettaPicture from 'src/assets/images/bruchetta.svg';
import lemonDesertPicture from 'src/assets/images/lemon dessert.jpg';

const Specials = () => (
    <>
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
    </>
);

export default Specials;
