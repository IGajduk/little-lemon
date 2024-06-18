import './TimePicker.css';
import ScrollContainer from 'react-indiana-drag-scroll';

const createTimeArray = (startTime, endTime, durationMinutes) => {
    let times = [];
    let start = new Date('1970-01-01T' + startTime + ':00');
    let end = new Date('1970-01-01T' + endTime + ':00');
    let duration = durationMinutes * 60 * 1000; // convert minutes to milliseconds

    for (let time = start; time <= end; time = new Date(time.getTime() + duration)) {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        let strMinutes = String(minutes).padStart(2, '0');
        let strTime = `${hours}:${strMinutes} ${ampm}`;
        times.push(strTime);
    }

    return times;
}

// // Example usage:
// let startTime = "11:00";
// let endTime = "22:00";
// let durationMinutes = 30;

// let timeArray = createTimeArray(startTime, endTime, durationMinutes);
// console.log(timeArray);



const TimePicker = ({
    selectedValue,
    onChange,
    fieldName = 'res-time',
    amountOfRadioButtons = 13,
    sectionLabel = 'TIME',
    disabledOptions = [4, 5, 6],
    range: [startTime, endTime],
    durationMinutes
}) => {
    console.log([startTime, endTime]);
    const selectionChanges = (e) => {
        onChange(e);
    };
    const timeArray = createTimeArray(startTime, endTime, durationMinutes);
    const radioButtonsRow1 = [];
    const radioButtonsRow2 = [];
    timeArray.forEach((time, index) => {
        const isEven = ((index + 1) % 2) === 0;
        const isChecked = selectedValue === time;
        const isDisabled = disabledOptions.includes(time);
        if (isDisabled && isChecked) {
            onChange({target: {value: undefined, name: fieldName}});
        }
            (isEven ? radioButtonsRow2 : radioButtonsRow1).push(
                <label className="r-item" key={'radio' + fieldName + time}>
                    <input type="radio" name={fieldName} checked={isChecked} value={time} onChange={selectionChanges} disabled={isDisabled} />
                    <span className="r-label">{time}</span>
                </label>
            )
    });

    return (
        <>
            <h3 className='section-label'>{sectionLabel}</h3>
            <ScrollContainer nativeMobileScroll={true} style={{overflow: 'scroll'}}>
                <div className="time-picker">
                    {radioButtonsRow1}
                </div>
                <div className="time-picker">
                    {radioButtonsRow2}
                </div>
            </ScrollContainer>
        </>
    )
}

export default TimePicker;