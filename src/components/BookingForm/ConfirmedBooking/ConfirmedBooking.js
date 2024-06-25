import Footer from "src/components/Footer/Footer";
import Nav from "src/components/Nav/Nav";
import { useSearchParams, useNavigate, createSearchParams } from 'react-router-dom';
import { useEffect } from "react";



export default function ConfirmedBooking () {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({top:0});
  });
  const goToPrevStep = () => {
    const options = {
        pathname: '/booking',
        search: `?${createSearchParams(currentObj)}`,
      };
      localStorage.setItem('reservation-form', '{}');
    navigate(options, {replace: true});
  };
  const currentObj = JSON.parse(localStorage.getItem('reservation-form') || '{}');
  window.onpopstate = goToPrevStep;
  const selectedValuesList = Object.keys(currentObj).map((key) => <li key={'booking-detail-' + key}>{key}: {currentObj[key] ? currentObj[key] : '-'}</li>)
    return (<>
        <Nav></Nav>
            <section style={{padding: '16px'}}>
                <h1>Your reservation successfully confirmed</h1>
                <ul>
                    {selectedValuesList}
                </ul>
                <button onClick={goToPrevStep}>Edit info</button>
            </section>
        <Footer></Footer>
    </>);
}