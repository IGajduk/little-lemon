
import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateSelector from './DateSelector';
import { getLastDayInMonth, getNextDay } from 'src/utils/date-utils';

describe('loader appearence', () => {
    test('renders DateSelector component with loader', () => {
        const component = render(<DateSelector isLoading={true} />);
        expect(component.container.getElementsByClassName('loader').length).toBe(1);
    });

    test('current date check', () => {
        const currentDate = new Date();
        const {container} = render(<DateSelector selectedValue={currentDate} />);
        expect(container.getElementsByClassName('react-calendar__tile--active')[0]).toHaveTextContent(currentDate.getDate());
    });

    test('onChange event with last date in month selection', () => {
        let currentDate = new Date();
        let lastDayInMonth = getLastDayInMonth(currentDate.getMonth() + 1, currentDate.getFullYear(), 'date');
        const goToTestNextMonth = lastDayInMonth.getDate() == currentDate.getDate();
        if (goToTestNextMonth) {
            currentDate = getNextDay(currentDate);
            lastDayInMonth = getLastDayInMonth(currentDate.getMonth() + 1, currentDate.getFullYear(), 'date');
        }
        let onChangeEvent;
        const mockOnChange = (e) => {
            onChangeEvent = e;
            currentDate = e;
            return e;
        };
        let {container} = render(<DateSelector onChange={mockOnChange} selectedValue={currentDate} />);
        const tiles = container.getElementsByClassName('react-calendar__tile');
        const tilesArray = Array.from(tiles);
        const filteredTiles = tilesArray.filter(tile =>
            !tile.classList.contains('react-calendar__month-view__days__day--neighboringMonth')
        );
        const dayToSelect = String(lastDayInMonth.getDate());
        const dateToSelectContainer = filteredTiles.find(tile => {
            const value = tile.textContent === dayToSelect;

            return value;
        });
        act(() => {
            fireEvent.click(dateToSelectContainer);
        });
        container = render(<DateSelector onChange={mockOnChange} selectedValue={onChangeEvent} />).container;
        expect(onChangeEvent).toStrictEqual(lastDayInMonth);
        expect(container.getElementsByClassName('react-calendar__tile--active')[0]).toHaveTextContent(lastDayInMonth.getDate());
    });
});