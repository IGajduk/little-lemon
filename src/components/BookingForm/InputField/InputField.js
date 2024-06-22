import './InputField.css'

const InputField = ({
    type = 'text',
    selectedValue,
    onChange,
    onBlur,
    fieldName,
    disabled,
    errorMessage,
    required
}) => (
    <>
        <input
            className="input-field"
            type={type}
            style={errorMessage && {borderColor: 'var(--error-color)'}}
            value={selectedValue}
            name={fieldName}
            onBlur={onBlur}
            onChange={onChange}
            disabled={disabled}
            required={required}
        />
        {errorMessage && <p className="input-error">{errorMessage}</p>}
    </>
);

export default InputField;