

import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import BookingForm from '../components/BookingForm/BookingForm';
import useSubmit from 'src/hooks/useSubmit';
import {fetchAPI} from 'src/api/mockup-api.js';
import { useNavigate, useSearchParams, createSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { formatDate } from 'src/utils/format-date';

const BookingPage = () => {
  const {isLoading, response} = useSubmit();
    const [availableTime, setAvailableTimes] = useState({isLoading: true, time: []});
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const currentObj = {};
    searchParams.forEach(((value, key) => {
      currentObj[key] = value;
    }));

    const {
      handleBlur,
      handleChange,
      values,
      errors,
      touched,
      handleSubmit,
      resetForm,
      initialValues,
      validateForm
    } = useFormik({
        initialValues: {
            name: currentObj.name || '',
            date: currentObj.date ? new Date(currentObj.date) : new Date(),
            time: currentObj.time || '',
            guests: currentObj.guests || 4,
            occasion: currentObj.occasion || '',
            email: currentObj.email || ''
        },
        onSubmit: (formValues) => {
          const params = {
            ...formValues,
            date: formatDate(formValues.date)
          };
          localStorage.setItem('reservation-form', JSON.stringify(params));
          const options = {
            pathname: '/confirmed-booking',
          };
          navigate(options, { replace: true });
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Plese, enter your name.'),
            email: Yup.string().email("Invalid email address").required("Please, enter your email."),
            date: Yup.string().required('Plese, select a Date.'),
            time: Yup.mixed().oneOf(availableTime.time, 'No available time for current date, please select another date.')
              .required(availableTime.time.length ? 'Plese, select a time.' : 'No available time for current date, please select another date.'),
            guests: Yup.number().oneOf([3,4,5,6,7,8,9,10,11,12,13,14], 'Tables for this amount of guests are not available for this date.').required('Please, select numer of guests'),
            occasion: Yup.string()
        })
    });

    useEffect(() => {
      const selectedTime = values.time;
      handleChange({target: {value: '', name: 'time'}});
      setAvailableTimes({time: [], isLoading: true});
      setTimeout(() => {
        const availableTimes = fetchAPI(values.date);
        // setAvailableTimes({time: [], isLoading: false});
        setAvailableTimes({time: availableTimes, isLoading: false});
        if (availableTimes.includes(selectedTime)) {
          handleChange({target: {value: selectedTime, name: 'time'}});
          setTimeout(() => validateForm(), 1000);
        }
      }
      , 1000);
    }, [values.date, validateForm, handleChange, values.time]);

    useEffect(() => {
      if (!response) return;
      console.log(response.type, response.message);
      if (response.type === 'success') {
        resetForm();
      }

    }, [response, resetForm]);

  return (
  <>
    <Nav></Nav>
    <BookingForm availableTime={availableTime} isLoading={isLoading} currentObj={currentObj}
      handleBlur={handleBlur}
      handleChange={handleChange}
      values={values}
      errors={errors}
      touched={touched}
      handleSubmit={handleSubmit}
      resetForm={resetForm}
      initialValues={initialValues}
      validateForm={validateForm}
    />
    <Footer></Footer>
  </>
)};
export default BookingPage;
