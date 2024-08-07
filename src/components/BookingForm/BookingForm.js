import './ReservationForm.css';
import HorizontalNumberSelector from './HorizontalNumberSelect/HorizontalNumberSelect';
import DateSelector from './DateSelector/DateSelector';
import TimePicker from './TimePicker/TimePicker';
import InputField from './InputField/InputField';
import TextAreaField from './TextAreaField/TextAreaField';


const BookingForm = ({
  availableTime,
  isLoading,
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  handleSubmit
}) => {


  return (
    <>
      <form className='reservation-form'
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
      >
      <h1 className='page-title'>Table reservation</h1>
          <div className='date'>
            <label htmlFor='date' className='section-label'>Date *</label>
            <DateSelector
              onChange={(e) => {handleChange({target: {value: new Date(e), name: 'date'}});}}
              isLoading={availableTime.isLoading || isLoading}
              selectedValue={values.date}
              onBlur={handleBlur}
              >
              </DateSelector>
              {touched.date && errors.date && <p className='input-error'>{touched.date && errors.date}</p>}
          </div>
          <div className='time'>
            <TimePicker
              onChange={(e) => handleChange(e)}
              selectedValue={values.time}
              durationMinutes={30}
              range={['2:00 PM', '10:00 PM']}
              availableOptions={availableTime.time}
              sectionLabel='Time *'
              fieldName='time'
              onBlur={handleBlur}
              isLoading={availableTime.isLoading || isLoading}
            />
            {touched.time && errors.time && <p className='input-error'>{touched.time && errors.time}</p>}
        </div>
        <div className='guests'>
          {isLoading && <div className='section-blocked'><span className='loader'></span></div>}
          <HorizontalNumberSelector
            selectedValue={values.guests}
            fieldName='guests'
            onChange={handleChange}
            amountOfRadioButtons={14}
            sectionLabel='Number Of Guests *'
            disabledOptions={[1, 2]}
            onBlur={handleBlur}
          />
          {touched.guests && errors.guests && <p className='input-error'>{touched.guests && errors.guests}</p>}
        </div>
        <div className='name'>
          {isLoading && <div className='section-blocked'></div>}
          <label htmlFor='name' className='section-label'>Name *</label>
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
          <label htmlFor='email' className='section-label'>@ Email *</label>
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
          <label htmlFor='occasion' className='section-label'>Reservation details (Optional)</label>
          <TextAreaField
            fieldName='occasion'
            selectedValue={values.occasion}
            onChange={handleChange}
            errorMessage={touched.occasion && errors.occasion}
            onBlur={handleBlur}
          ></TextAreaField>
        </div>
        {<ul className="text-a-error form-errors">
          {Object.keys(touched)[0] && Object.values(errors).map((value) => <li key={'form-errors' + value}>{value}</li>)}
        </ul>}
        <div className="submit">
          <button data-testid={'submit-button'} className={`${isLoading && 'submit-loading'}`} type='submit' disabled={Object.keys(errors)[0] || isLoading}>
            <span>Checkout</span>
          </button>
        </div>
      </form>
    </>
  );
}

export default BookingForm;