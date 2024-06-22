import Calendar from 'react-calendar';
import './DateSelector.css'

const DateSelector = ({selectedValue, onChange, onBlur, isLoading}) => {

    return <fieldset>
            {isLoading && <div className='section-blocked'><span className='loader'></span></div>}
            <Calendar name='date' onBlur={onBlur} value={selectedValue} onChange={onChange} minDate={new Date()}></Calendar>
        </fieldset>;
};

export default DateSelector;