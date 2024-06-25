
import { formatDate } from 'src/utils/format-date';

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }
  
// Function to convert 24-hour time to AM/PM format
const convertToAMPM = function (timeStr) {
  let [hours, minutes] = timeStr.split(':').map(Number);
  let period = 'AM';

  if (hours >= 12) {
      period = 'PM';
      if (hours > 12) {
          hours -= 12;
      }
  } else if (hours === 0) {
      hours = 12;
  }

  return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;
}

// Function to fetch API data with times in 12-hour AM/PM format
export const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());
  const reservation = JSON.parse(localStorage.getItem('reservation-form'));
  const notAvailableTime = formatDate(date) === reservation?.date ? reservation?.time : false;
  for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
          const timeToAdd = convertToAMPM(i + ':00');
          if (timeToAdd !== notAvailableTime) {
            result.push(timeToAdd);
          }
      }
      if (random() < 0.5) {
        const timeToAdd = convertToAMPM(i + ':30');
        if (timeToAdd !== notAvailableTime) {
          result.push(timeToAdd);
        }
      }
  }
  return result;
};
  export const submitAPI = function(formData) {
    return true;
  };
