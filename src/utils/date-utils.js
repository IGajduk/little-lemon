
const oneDay = 86400000;
/**
 * Returns the last day of the specified month and year.
 *
 * @param {number} month - The month for which to find the last day (1-12).
 * @param {number} year - The year for which to find the last day.
 * @param {'date'|'day'} [format='date'] - The format of the returned value ('date' for Date object, 'day' for day of the month).
 * @returns {Date|number} - The last day of the month as a Date object or day number depending on the format.
 */
export const getLastDayInMonth = (month, year, format = 'date') => {
    const lastDayOfMonth = new Date (new Date(`${year}-${month + 1}-${1}`).getTime() - oneDay);
    let result;
    switch (format) {
        case 'day':
            result = lastDayOfMonth.getDate();
            break;
        default:
            result = lastDayOfMonth;
    }

    return result;
};

/* Returns the next day of the date.
*
* @param {Date} date - The date.
* @returns {Date} - The next day after specific Date.
*/
export const getNextDay = date => new Date((new Date(date.getTime())).setDate((date.getDate() + 1)));
