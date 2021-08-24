import fetch from 'cross-fetch';

// Utils
import { ACTION_FETCH_WEATHER, API_URL_OWM } from '../../../utils/constants';

export default function fetchWeatherReport() {
  return (dispatch) => fetch(`${API_URL_OWM}id=${process.env.REACT_APP_OPEN_WEATHER_MAP_CITY_ID}&appId=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`)
    .then((response) => {
      // TODO: Move 400 to consts
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
      // eslint-disable-next-line no-console
      console.error(err);
    });
}
