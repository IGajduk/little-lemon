import 'src/components/CustomerSay/CustomerSay.css';
import ladyPhoto from 'src/assets/images/women.jpg';
import teenagerPhoto from 'src/assets/images/teenager.jpg';
import mamPhoto from 'src/assets/images/grandmother.jpg';
import youngManPhoto from 'src/assets/images/young_man.jpg';
const CustomerSay = () => (
    <>
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
            <img src={ladyPhoto} alt="review person"/>
          </div>
          <h5 className="person-name">Raychel</h5>
          <div className="review-date">2 months ago</div>
          <p className="review-text">
             Cozy atmosphere perfect for a night out.
          </p>
        </article>
        <article className="review-item review-2">
          <div className="person-photo-block">
            <img src={teenagerPhoto} alt="review person"/>
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
            <img src={mamPhoto} alt="review person"/>
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
            <img src={youngManPhoto} alt="review person"/>
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
    </>
);

export default CustomerSay;
