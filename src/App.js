import './assets/styles/App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage  from './pages/BookingPage';

function App() {
  return (
      <Routes> 
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
  );
}

export default App;
