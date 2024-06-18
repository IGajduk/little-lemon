import './HorizontalNumberSelect.css'

import ScrollContainer from 'react-indiana-drag-scroll'
const HorizontalNumberSelector = ({
    selectedValue,
    onChange,
    fieldName,
    amountOfRadioButtons,
    sectionLabel,
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
            <input type="radio" name={fieldName} checked={isChecked} value={val} onChange={selectionChanges} disabled={isDisabled} />
            <span className="r-label">{val}</span>
        </label>
    });

    return (
        <>
            <h3 className='section-label'>{sectionLabel}</h3>
            <ScrollContainer nativeMobileScroll={true} style={{overflow: 'scroll'}}>
                <div className="horizontal-number-select">
                    {radioButtons}
                </div>
            </ScrollContainer>
        </>
    )
}

export default HorizontalNumberSelector;