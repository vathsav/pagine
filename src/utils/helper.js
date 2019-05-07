import {
  WEATHER_STATUS_ASH,
  WEATHER_STATUS_CLEAR,
  WEATHER_STATUS_CLOUDS,
  WEATHER_STATUS_DRIZZLE, WEATHER_STATUS_DUST, WEATHER_STATUS_FOG, WEATHER_STATUS_HAZE, WEATHER_STATUS_MIST,
  WEATHER_STATUS_RAIN, WEATHER_STATUS_SAND, WEATHER_STATUS_SMOKE,
  WEATHER_STATUS_SNOW, WEATHER_STATUS_SQUALL,
  WEATHER_STATUS_THUNDERSTORM, WEATHER_STATUS_TORNADO,
} from './constants';

export function getWordCount(string) {
  const matches = string.match(/\S+/g);
  return matches ? matches.length : 0;
}

export function beautifyDateTime(date) {
  function getDay(dataObject) {
    switch (dataObject.getDay()) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
      default: return '';
    }
  }

  function getMonth(dataObject) {
    switch (dataObject.getMonth()) {
      case 0: return 'January';
      case 1: return 'February';
      case 2: return 'March';
      case 3: return 'April';
      case 4: return 'May';
      case 5: return 'June';
      case 6: return 'July';
      case 7: return 'August';
      case 8: return 'September';
      case 9: return 'October';
      case 10: return 'November';
      case 11: return 'December';
      default: return '';
    }
  }

  function getYear(dataObject) {
    return (dataObject.getFullYear().toString()).substring(2, 4);
  }

  return `${getDay(date)} ${date.getDate()}, ${getMonth(date)} '${getYear(date)}`;
}

export function resolveWeatherCode(code) {
  switch (code) {
    case 200: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: 1,
      };
    }
    case 201: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: 5,
      };
    }
    case 202: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: 10,

      };
    }
    case 210: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: 1,
      };
    }
    case 211: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: 5,
      };
    }
    case 212: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: 10,
      };
    }
    case 221: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: 10,
      };
    }
    case 230: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: 1,
      };
    }
    case 231: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: 1,
      };
    }
    case 232: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: 10,

      };
    }
    case 300: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: 1,
      };
    }
    case 301: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: 1,
      };
    }
    case 302: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: 10,
      };
    }
    case 310: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: 1,
      };
    }
    case 311: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: 1,
      };
    }
    case 312: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: 10,
      };
    }
    case 313: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: 1,
      };
    }
    case 314: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: 10,
      };
    }
    case 321: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: 1,
      };
    }
    case 500: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: 1,
      };
    }
    case 501: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: 5,
      };
    }
    case 502: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: 10,
      };
    }
    case 503: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: 10,
      };
    }
    case 504: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: 10,
      };
    }
    case 511: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: 5,
      };
    }
    case 520: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: 1,
      };
    }
    case 521: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: 5,
      };
    }
    case 522: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: 10,
      };
    }
    case 531: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: 10,
      };
    }
    case 600: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: 1,
      };
    }
    case 601: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: 5,
      };
    }
    case 602: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: 10,
      };
    }
    case 611: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: 1,
      };
    }
    case 612: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: 1,
      };
    }
    case 613: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: 1,
      };
    }
    case 615: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: 1,
      };
    }
    case 616: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: 5,
      };
    }
    case 620: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: 1,
      };
    }
    case 621: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: 5,
      };
    }
    case 622: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: 10,
      };
    }

    case 701: {
      return {
        status: WEATHER_STATUS_MIST,
        intensity: 0,
      };
    }
    case 711: {
      return {
        status: WEATHER_STATUS_SMOKE,
        intensity: 0,
      };
    }
    case 721: {
      return {
        status: WEATHER_STATUS_HAZE,
        intensity: 0,
      };
    }
    case 731: {
      return {
        status: WEATHER_STATUS_DUST,
        intensity: 1,
      };
    }
    case 741: {
      return {
        status: WEATHER_STATUS_FOG,
        intensity: 0,
      };
    }
    case 751: {
      return {
        status: WEATHER_STATUS_SAND,
        intensity: 0,
      };
    }
    case 761: {
      return {
        status: WEATHER_STATUS_DUST,
        intensity: 0,
      };
    }
    case 762: {
      return {
        status: WEATHER_STATUS_ASH,
        intensity: 0,
      };
    }
    case 771: {
      return {
        status: WEATHER_STATUS_SQUALL,
        intensity: 0,
      };
    }
    case 781: {
      return {
        status: WEATHER_STATUS_TORNADO,
        intensity: 0,
      };
    }
    case 800: {
      return {
        status: WEATHER_STATUS_CLEAR,
        intensity: 0,
      };
    }
    case 801: {
      return {
        status: WEATHER_STATUS_CLOUDS,
        intensity: 2,
      };
    }
    case 802: {
      return {
        status: WEATHER_STATUS_CLOUDS,
        intensity: 4,
      };
    }
    case 803: {
      return {
        status: WEATHER_STATUS_CLOUDS,
        intensity: 6,
      };
    }
    case 804: {
      return {
        status: WEATHER_STATUS_CLOUDS,
        intensity: 8,
      };
    }
    default: {
      return {
        status: '',
        intensity: '',
      };
    }
  }
}
