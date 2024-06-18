import Calendar from 'react-calendar';
import './DateSelector.css'

const DateSelector = ({selectedValue, onChange}) => {

    return <Calendar value={selectedValue} onChange={onChange} minDate={new Date()}></Calendar>;
};

export default DateSelector;