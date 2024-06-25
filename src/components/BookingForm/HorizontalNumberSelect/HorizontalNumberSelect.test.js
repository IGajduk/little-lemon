import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HorizontalNumberSelect from './HorizontalNumberSelect';

describe('HorizontalNumberSelect Component', () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const fieldName = 'number-select';
    const selectedValue = 2;
    const sectionLabel = "GUESTS";
    const disabledOptions = [1, 2];
    const amountOfRadioButtons = 14;

    test('renders the component with correct amount options', () => {
        const { getByTestId, getAllByRole, container } = render(
            <HorizontalNumberSelect
            selectedValue={selectedValue}
            fieldName={fieldName}
            onChange={mockOnChange}
            amountOfRadioButtons={amountOfRadioButtons}
            sectionLabel={sectionLabel}
            onBlur={mockOnBlur}
            />
        );

        expect(getByTestId(`${sectionLabel}-label`)).toHaveTextContent(sectionLabel);
        const radioButtons = getAllByRole('radio');
        expect(radioButtons).toHaveLength(amountOfRadioButtons);
        expect(container.querySelector('.r-item input[type="radio"]:checked + .r-label').innerHTML).toBe(String(selectedValue));
        radioButtons.forEach((radio, index) => {
            const radioButtonValue = +radio.getAttribute('value');
            expect(typeof (radioButtonValue)).toBe('number');
            expect(radio).not.toBeDisabled();
        });
    });


    test('calls onChange when a time is selected', () => {
        const { getByLabelText, getByTestId, getAllByRole, container } = render(
            <HorizontalNumberSelect
            selectedValue={selectedValue}
            fieldName={fieldName}
            onChange={mockOnChange}
            amountOfRadioButtons={amountOfRadioButtons}
            sectionLabel={sectionLabel}
            onBlur={mockOnBlur}
            />
        );


        const newValue = '3';
        const radio = getByLabelText(newValue);
        act(() => {
            fireEvent.click(radio);
        })
        const exp = expect(mockOnChange);
        exp.toHaveBeenCalledTimes(1);
        exp.toHaveBeenCalledWith(expect.objectContaining({
          target: expect.objectContaining({
            value: newValue
          })
        }));
    });


    test('disables unavailable options', () => {
        const { getByTestId, getAllByRole, container } = render(
            <HorizontalNumberSelect
            selectedValue={selectedValue}
            fieldName={fieldName}
            onChange={mockOnChange}
            amountOfRadioButtons={amountOfRadioButtons}
            sectionLabel={sectionLabel}
            onBlur={mockOnBlur}
            disabledOptions={disabledOptions}
            />
        );

        expect(getByTestId(`${sectionLabel}-label`)).toHaveTextContent(sectionLabel);
        const radioButtons = getAllByRole('radio');
        expect(radioButtons).toHaveLength(amountOfRadioButtons);
        const disabledOptionsLabels = container.querySelectorAll('.r-item input[type="radio"]:disabled + .r-label');
        expect(disabledOptionsLabels).toHaveLength(2);
        disabledOptionsLabels.forEach((disabledLabel, index) => {
            expect(disabledOptions.includes(Number(disabledLabel.innerHTML))).toBe(true);
        });
    });
});