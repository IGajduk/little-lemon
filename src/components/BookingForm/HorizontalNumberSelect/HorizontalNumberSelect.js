import './HorizontalNumberSelect.css'

import ScrollContainer from 'react-indiana-drag-scroll'
const HorizontalNumberSelector = ({
    selectedValue,
    onChange,
    fieldName,
    amountOfRadioButtons,
    sectionLabel,
    onBlur,
    disabledOptions
}) => {
    const arrOfNumbers = [...Array(amountOfRadioButtons).keys()];
    const radioButtons = arrOfNumbers.map((num) => {
        const val = num + 1;
        const isChecked = Number(selectedValue) === val;
        const isDisabled = disabledOptions && disabledOptions.includes(val);
        const forAttr = `${fieldName}-${num}`;
        return <label className="r-item" key={'radio' + fieldName + num} htmlFor={forAttr}>
                <input id={forAttr} type="radio" name={fieldName} onBlur={onBlur} checked={isChecked} value={val} onChange={onChange} disabled={isDisabled} />
                <span className="r-label">{val}</span>
        </label>
        // <button className="r-item" type='button' onClick={() => !isDisabled && onChange({target: {value: val, name: fieldName}})}>
                
        //    </button>
    });

    return (
        <>
            <h3 data-testid={sectionLabel + "-label"} className='section-label'>{sectionLabel}</h3>
            <ScrollContainer nativeMobileScroll={true} style={{overflow: 'scroll'}}>
                <fieldset id={fieldName} className="horizontal-number-select">
                    {radioButtons}
                    <div style={{height: '108px'}}></div>
                </fieldset>
            </ScrollContainer>
        </>
    )
}

export default HorizontalNumberSelector;