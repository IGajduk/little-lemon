// import { render, fireEvent, screen, useState } from "@testing-library/react";
// import TimePicker from "./TimePicker";
// // import { useState } from "react";

// test("Pick a time", () => {
//   const defaultValue = '11:00 AM';
//   const sectionLabel = 'TIME *';
//   const maxValue = '10:00 PM';
//   const duration = 30;
//   const timeToTest = `${defaultValue.replace('00', String(duration))}`
//   const fieldName = 'time';
//   // render the App component
//   let time = defaultValue;
//   const handleChange = (e) => {
//     time = e.target.value;
//   }
//   render(
//     <TimePicker
//     selectedValue={time}
//     range={[defaultValue, maxValue]}
//     onChange={handleChange}
//     durationMinutes={duration}
//     fieldName={fieldName}
//     sectionLabel={sectionLabel}
//     availableOptions={[]}
//     />
// );

//   // save the heading in a variable
//   const heading = screen.getByTestId(sectionLabel + "-label");

// //   // save the button in a variable
//   const btn = screen.getByTestId("button-" + timeToTest);
//   console.log("btn.hasAttribute('disabled')", btn.hasAttribute('disabled'));
// //   // click the btn
//   fireEvent.click(btn);
//   expect(time).toEqual(timeToTest);

//   // test assumption
//   expect(heading).toHaveTextContent(sectionLabel);
// });


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TimePicker from './TimePicker';

describe('TimePicker Component', () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const fieldName = 'time-picker';
    const startTime = '8:00 AM';
    const endTime = '10:00 AM';
    const durationMinutes = 30;
    const selectedValue = '9:00 AM';
    const availableOptions = ['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM'];
    const initialValue = '8:00 AM';

    test('renders the component with correct time options', () => {
        const { getByTestId, getAllByRole, container } = render(
            <TimePicker
                selectedValue={selectedValue}
                onChange={mockOnChange}
                fieldName={fieldName}
                range={[startTime, endTime]}
                durationMinutes={durationMinutes}
                availableOptions={availableOptions}
                onBlur={mockOnBlur}
                initialValue={initialValue}
                isLoading={false}
            />
        );

        expect(getByTestId('TIME-label')).toHaveTextContent('TIME');
        const radioButtons = getAllByRole('radio');
        expect(radioButtons).toHaveLength(5);

        radioButtons.forEach((radio, index) => {
            expect(availableOptions.includes(radio.getAttribute('value'))).toBe(true);
            expect(radio).not.toBeDisabled();
        });
        expect(container.querySelector('input[type="radio"]:checked')).toBeChecked();
        expect(container.querySelector('.r-item input[type="radio"]:checked + .r-label').innerHTML).toBe(selectedValue);
    });

    test('calls onChange when a time is selected', () => {
        const { getByLabelText } = render(
            <TimePicker
                selectedValue={selectedValue}
                onChange={mockOnChange}
                fieldName={fieldName}
                range={[startTime, endTime]}
                durationMinutes={durationMinutes}
                availableOptions={availableOptions}
                onBlur={mockOnBlur}
                initialValue={initialValue}
                isLoading={false}
            />
        );

        const newTime = '8:30 AM';
        const radio = getByLabelText(newTime);
        fireEvent.click(radio);
        const exp = expect(mockOnChange);
        exp.toHaveBeenCalledTimes(1);
        exp.toHaveBeenCalledWith(expect.objectContaining({
          target: expect.objectContaining({
            value: newTime
          })
        }));
    });

    test('disables unavailable time options', () => {
        const { getByLabelText } = render(
            <TimePicker
                selectedValue={selectedValue}
                onChange={mockOnChange}
                fieldName={fieldName}
                range={[startTime, endTime]}
                durationMinutes={durationMinutes}
                availableOptions={['8:00 AM', '9:00 AM']}
                onBlur={mockOnBlur}
                initialValue={initialValue}
                isLoading={false}
            />
        );

        const availableTime = '8:00 AM';
        const unavailableTime = '8:30 AM';

        expect(getByLabelText(availableTime)).not.toBeDisabled();
        expect(getByLabelText(unavailableTime)).toBeDisabled();
    });

    test('all buttons is disabled when isLoading is true', () => {
        const {getAllByRole } = render(
            <TimePicker
                selectedValue={selectedValue}
                onChange={mockOnChange}
                fieldName={fieldName}
                range={[startTime, endTime]}
                durationMinutes={durationMinutes}
                availableOptions={availableOptions}
                onBlur={mockOnBlur}
                initialValue={initialValue}
                isLoading={true}
            />
        );
        const radioButtons = getAllByRole('radio');

        radioButtons.forEach((radio, index) => {

          expect(radio).toBeDisabled();
        });
    });

    test('handles onBlur event', () => {
        const { getByLabelText } = render(
            <TimePicker
                selectedValue={selectedValue}
                onChange={mockOnChange}
                fieldName={fieldName}
                range={[startTime, endTime]}
                durationMinutes={durationMinutes}
                availableOptions={availableOptions}
                onBlur={mockOnBlur}
                initialValue={initialValue}
                isLoading={false}
            />
        );

        const radio = getByLabelText('9:00 AM');
        fireEvent.blur(radio);

        expect(mockOnBlur).toHaveBeenCalledTimes(1);
    });
});