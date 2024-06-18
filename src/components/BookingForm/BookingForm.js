import React, { useState } from 'react';
import './ReservationForm.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import HorizontalNumberSelector from './HorizontalNumberSelect/HorizontalNumberSelect';
import DateSelector from './DateSelector/DateSelector';
import TimePicker from './TimePicker/TimePicker';


const NUMBER_OF_GUESTS = {min: 1, max: 20}

function ReservationForm() {
    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            guests: 1,
            occasion: ''
        },
        validationSchema: Yup.object().shape({
            date: Yup.string().required('Plese, select Date.'),
            time: Yup.string().required('Plese, select time.'),
            guests: Yup.number().min(NUMBER_OF_GUESTS.min).max(NUMBER_OF_GUESTS.max),
            occasion: Yup.string().required('Required')
        })
    });
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  console.log(date);
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'res-date':
        setDate(value);
        break;
      case 'res-time':
        setTime(value);
        break;
      case 'guests':
        setGuests(value);
        break;
      case 'occasion':
        setOccasion(value);
        break;
      default:
        break;
    }
  };

  return (
    <form className='reservationForm'>
        <div className='date'>
          <h3 className='section-label'>Date *</h3>
          <DateSelector
           onChange={(e) => handleChange({target: {value: new Date(e), name: 'res-date'}})}
             selectedValue={date}
             >
            </DateSelector>
        </div>
        <div className='time'>
          <TimePicker
            onChange={(e) => handleChange(e)}
            selectedValue={time}
            durationMinutes={30}
            range={['11:00', '22:00']}
          />
      </div>
      <HorizontalNumberSelector
        selectedValue={guests}
        fieldName="guests"
        onChange={(e) => handleChange(e)}
        amountOfRadioButtons={14}
        sectionLabel="Number of Guests"
        disabledOptions={[2, 3]}
      />
      <label
        htmlFor="occasion"
        style={{ color: 'white', marginBottom: '5px' }}
      >
        Occasion
      </label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={handleChange}
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <span
        style={{
          display: 'inline-block',
          marginLeft: '10px',
          color: 'red',
        }}
      >
        {occasion ? '↗' : ''}
      </span>
      <input
        type="submit"
        value="Make Your Reservation"
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      />
    </form>
  );
}

export default ReservationForm;