import './HorizontalNumberSelect.css'

import ScrollContainer from 'react-indiana-drag-scroll'
const HorizontalNumberSelector = ({
    selectedValue,
    onChange,
    fieldName,
    amountOfRadioButtons,
    sectionLabel,
    onBlur,
    disabledOptions = [4, 5, 6]
}) => {
    const selectionChanges = (e) => {
        onChange(e);
    };
    const arrOfNumbers = [...Array(amountOfRadioButtons).keys()];
    const radioButtons = arrOfNumbers.map((num) => {
    const val = num + 1;
    const isChecked = Number(selectedValue) === val;
    const isDisabled = disabledOptions.includes(val);
    if (isDisabled && isChecked) {
        onChange({target: {value: undefined, name: fieldName}});
    }
        return <label className="r-item" key={'radio' + fieldName + num}>
            <input type="radio" name={fieldName} onBlur={onBlur} checked={isChecked} value={val} onChange={selectionChanges} disabled={isDisabled} />
            <span className="r-label">{val}</span>
        </label>
    });

    return (
        <>
            <label htmlFor={fieldName} className='section-label'>{sectionLabel}</label>
            <ScrollContainer nativeMobileScroll={true} style={{overflow: 'scroll'}}>
                <fieldset className="horizontal-number-select">
                    {radioButtons}
                </fieldset>
            </ScrollContainer>
        </>
    )
}

export default HorizontalNumberSelector;