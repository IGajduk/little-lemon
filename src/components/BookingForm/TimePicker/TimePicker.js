import './TimePicker.css';
import ScrollContainer from 'react-indiana-drag-scroll';

function createTimeArray(startTime, endTime, durationMinutes) {
    // Helper function to convert AM/PM to 24-hour format
    function convertTo24Hour(time) {
        let [hours, minutes] = time.split(':');
        let period = minutes.slice(-2);
        minutes = minutes.slice(0, -2);
        hours = parseInt(hours);
        minutes = parseInt(minutes);

        if (period.toUpperCase() === 'PM' && hours < 12) {
            hours += 12;
        }
        if (period.toUpperCase() === 'AM' && hours === 12) {
            hours = 0;
        }

        return { hours, minutes };
    }

    // Helper function to format time in AM/PM
    function formatTime(hours, minutes) {
        let period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = String(minutes).padStart(2, '0');
        return `${hours}:${minutes} ${period}`;
    }

    let times = [];
    let { hours: startHours, minutes: startMinutes } = convertTo24Hour(startTime);
    let { hours: endHours, minutes: endMinutes } = convertTo24Hour(endTime);

    let start = new Date(1970, 0, 1, startHours, startMinutes);
    let end = new Date(1970, 0, 1, endHours, endMinutes);
    let duration = durationMinutes * 60 * 1000; // convert minutes to milliseconds

    for (let time = start; time <= end; time = new Date(time.getTime() + duration)) {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        times.push(formatTime(hours, minutes));
    }

    return times;
};

const TimePicker = ({
    selectedValue,
    onChange,
    fieldName,
    sectionLabel = 'TIME',
    availableOptions,
    range: [startTime, endTime],
    durationMinutes,
    onBlur,
    isLoading
}) => {
    const selectionChanges = (e) => {
        onChange(e);
    };
    const timeArray = createTimeArray(startTime, endTime, durationMinutes);
    const radioButtonsRow1 = [];
    const radioButtonsRow2 = [];
    timeArray.forEach((time, index) => {
        const forAttr = `${fieldName}-${time}`;
        const isEven = ((index + 1) % 2) === 0;
        const isChecked = selectedValue === time;
        const isDisabled = isLoading || !(availableOptions || timeArray).includes(time);
            (isEven ? radioButtonsRow2 : radioButtonsRow1).push(
                <label htmlFor={forAttr} data-testid={'button-' + time} className={'r-item ' + (isDisabled ? '' : 'enbldR')} key={'radio' + fieldName + time}>
                    <input id={forAttr} type="radio" name={fieldName} onBlur={onBlur} checked={isChecked} value={time} onChange={selectionChanges} disabled={isDisabled} />
                    <span className="r-label">{time}</span>
                </label>
            )
    });

    return (
        <>
            {isLoading && <div className='section-blocked'><span className='loader'></span></div>}
            <h3 data-testid={sectionLabel + "-label"} className='section-label'>{sectionLabel}</h3>
            <ScrollContainer nativeMobileScroll={true} style={{overflow: 'scroll'}}>
                <fieldset>
                    <div className="time-picker">
                        {radioButtonsRow1}
                    </div>
                    <div className="time-picker">
                        {radioButtonsRow2}
                    </div>
                </fieldset>
            </ScrollContainer>
        </>
    )
};

export default TimePicker;