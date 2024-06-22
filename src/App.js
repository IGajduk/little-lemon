import './assets/styles/App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './components/BookingForm/ConfirmedBooking/ConfirmedBooking';

function App() {

  return (
    <>
      <Routes> 
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
      </Routes>
      </>
  );
}

export default App;
