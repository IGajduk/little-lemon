import './assets/styles/App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage  from './BookingPage';

function App() {
  return (
      <Routes> 
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
  );
}

export default App;
