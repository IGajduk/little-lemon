
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';
import { BrowserRouter } from 'react-router-dom';
import { wait } from '@testing-library/user-event/dist/utils';

describe('BookingForm Component', () => {

    test('expect to be disabled', async () => {
        const { getByTestId, getAllByRole, findByTestId, container } = render(
                <BrowserRouter>
                    <BookingForm/>
                </BrowserRouter>
        );
        const emailInput = await findByTestId(`email-input-field`);
        // const nameInput = await findByTestId(`name-input-field`);
        act(() => {
            // user.click(nameInput);
            // user.click(emailInput);
        });
        const submitButton = await findByTestId('submit-button');
        expect(submitButton).toBeDisabled();
    });

    test('expect to be enabled', async () => {
        const { getByTestId, getAllByRole, findByTestId, container } = render(
                <BrowserRouter>
                    <BookingForm/>
                </BrowserRouter>
        );
        const emailInput = await findByTestId(`email-input-field`);
        const nameInput = (await findByTestId(`name-input-field`));
        await new Promise ((res, rej) => {
            setTimeout(() => {
                res();
            }, 3000);
        });
        const timePickerOptions = container.querySelectorAll('.time .r-item.enbldR');
        const nameValue = 'John Creat';
        const emailValue = 'JGreat@gmail.com';
        const firstEnableTimeOption = timePickerOptions[0].children[0];
        const selectedTimeValue = firstEnableTimeOption.value;
        act(() => {
            user.type(nameInput, nameValue);
            user.type(emailInput, emailValue);
            user.click(firstEnableTimeOption);
        });
        expect(nameInput.value).toBe(nameValue);
        expect(emailInput.value).toBe(emailValue);
        const selectedTime = (await findByTestId(`button-${selectedTimeValue}`)).children[0].value;
        expect(selectedTime).toBe(selectedTimeValue);
        const submitButton = await findByTestId('submit-button');
        expect(submitButton).toBeEnabled();
    });
});