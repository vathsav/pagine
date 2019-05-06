import fetch from 'cross-fetch';

// Constants
import { ACTION_FETCH_WEATHER } from '../../../utils/constants';


export default function fetchWeatherReport() {
  return dispatch => fetch(`http://api.openweathermap.org/data/2.5/weather?id=${process.env.REACT_APP_OPEN_WEATHER_MAP_CITY_ID}&appId=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }

      return response.json();
    })
    .then((data) => {
      dispatch(
        {
          type: ACTION_FETCH_WEATHER,
          payload: {
            weather: data,
          },
        },
      );
    })
    .catch((err) => {
      console.error(err);
    });
}
