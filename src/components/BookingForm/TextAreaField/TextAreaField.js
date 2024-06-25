import './TextAreaField.css'

const TextAreaField = ({
    selectedValue,
    onChange,
    onBlur,
    fieldName,
    disabled,
    errorMessage,
    required,
    placeholder = 'Birthday celebration, meeting with clients, or other events.'
}) => (
    <>
        <textarea
            className="text-a-field"
            data-testid={fieldName + "-textarea-field"}
            style={errorMessage && {borderColor: 'var(--error-color)'}}
            value={selectedValue}
            name={fieldName}
            onBlur={onBlur}
            onChange={onChange}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
        />
        {errorMessage && <p className="text-a-error">{errorMessage}</p>}
    </>
);

export default TextAreaField;