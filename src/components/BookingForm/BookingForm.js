import { useEffect, useState } from 'react';
import './ReservationForm.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import HorizontalNumberSelector from './HorizontalNumberSelect/HorizontalNumberSelect';
import DateSelector from './DateSelector/DateSelector';
import TimePicker from './TimePicker/TimePicker';
import InputField from './InputField/InputField';
import TextAreaField from './TextAreaField/TextAreaField';
import useSubmit from 'src/hooks/useSubmit';
import {fetchAPI, submitAPI} from 'src/api/mockup-api.js';
import { useNavigate, useSearchParams, createSearchParams } from "react-router-dom";
import { formatDate } from 'src/utils/format-date';



const NUMBER_OF_GUESTS = {min: 1, max: 20}

const ReservationForm = () => {
    const {isLoading, response, submit} = useSubmit();
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
      initialValues
    } = useFormik({
        initialValues: {
            name: currentObj.name || '',
            date: currentObj.date ? new Date(currentObj.date) : new Date(),
            time: currentObj.time || '',
            guests: currentObj.guests || 1,
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
            time: Yup.string().required('Plese, select a time.'),
            guests: Yup.number().min(NUMBER_OF_GUESTS.min).max(NUMBER_OF_GUESTS.max).required('Please, select numer of guests'),
            occasion: Yup.string()
        })
    });

    useEffect(() => {
      const selectedTime = values.time;
      handleChange({target: {value: '', name: 'time'}});
      setAvailableTimes({time: [], isLoading: true});
      setTimeout(() => {
        const availableTimes = fetchAPI(values.date);
        setAvailableTimes({time: availableTimes, isLoading: false});
        handleChange({target: {value: selectedTime, name: 'time'}});
      }
      , 2000);
    }, [values.date]);

    useEffect(() => {
      if (!response) return;
      console.log(response.type, response.message);
      if (response.type == 'success') {
        resetForm();
      }

    }, [response]);


  return (
    <form className='reservation-form'
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
    >
        <div className='date'>
          <label htmlFor='date' className='section-label'>DATE *</label>
          <DateSelector
            onChange={(e) => {handleChange({target: {value: new Date(e), name: 'date'}});}}
            isLoading={availableTime.isLoading || isLoading}
            selectedValue={values.date}
            onBlur={handleBlur}
             >
            </DateSelector>
        </div>
        <div className='time'>
          <TimePicker
            onChange={(e) => handleChange(e)}
            selectedValue={values.time}
            durationMinutes={30}
            range={['2:00 PM', '10:00 PM']}
            availableOptions={availableTime.time}
            sectionLabel='TIME *'
            fieldName='time'
            onBlur={handleBlur}
            isLoading={availableTime.isLoading || isLoading}
            initialValue={initialValues.time}
          />
      </div>
      <div className='guests'>
        {isLoading && <div className='section-blocked'><span className='loader'></span></div>}
        <HorizontalNumberSelector
          selectedValue={values.guests}
          fieldName='guests'
          onChange={(e) => handleChange(e)}
          amountOfRadioButtons={14}
          sectionLabel='NUMBER OF GUESTS *'
          disabledOptions={[2, 3]}
          onBlur={handleBlur}
        />
      </div>
      <div className='name'>
        {isLoading && <div className='section-blocked'></div>}
        <label htmlFor='name' className='section-label'>NAME *</label>
        <InputField
          fieldName='name'
          selectedValue={values.name}
          onChange={handleChange}
          errorMessage={touched.name && errors.name}
          required={true}
          onBlur={handleBlur}
        ></InputField>
      </div>
      <div className='email'>
        {isLoading && <div className='section-blocked'></div>}
        <label htmlFor='email' className='section-label'>@ EMAIL *</label>
        <InputField
          fieldName='email'
          selectedValue={values.email}
          onChange={handleChange}
          errorMessage={touched.email && errors.email}
          required={true}
          onBlur={handleBlur}
        ></InputField>
      </div>
      <div className='occasion'>
        {isLoading && <div className='section-blocked'></div>}
        <label htmlFor='occasion' className='section-label'>RESERVATION DETAILS (OPTIONAL)</label>
        <TextAreaField
          fieldName='occasion'
          selectedValue={values.occasion}
          onChange={handleChange}
          errorMessage={touched.occasion && errors.occasion}
          onBlur={handleBlur}
        ></TextAreaField>
      </div>
      <div className="submit">
        <button  className={`${isLoading && 'submit-loading'}`} type='submit' disabled={!Object.keys(touched)[0] || Object.keys(errors)[0] || isLoading}>
          <span>Checkout</span>
        </button>
      </div>
    </form>
  );
}

export default ReservationForm;