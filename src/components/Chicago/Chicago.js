

import 'src/components/Chicago/Chicago.css';
import MarioAndAdrian from 'src/assets/images/Mario and Adrian A.jpg';
import SummerTerrace from 'src/assets/images/restaurant.jpg';

const Chicago = () => (
    <>
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
            <img src={MarioAndAdrian} alt="Adrian and Marion"/>
          </div>
          <div className="picture-2">
            <img src={SummerTerrace} alt="Our Summer Terrace"/>
          </div>
        </div>
      </section>
    </>
  );

export default Chicago;
