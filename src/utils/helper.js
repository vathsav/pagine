import * as d3 from 'd3';
// Constants
import {
  WEATHER_INTENSITY_HIGH,
  WEATHER_INTENSITY_LOW,
  WEATHER_INTENSITY_MEDIUM,
  WEATHER_STATUS_ASH,
  WEATHER_STATUS_CLEAR,
  WEATHER_STATUS_CLOUDS,
  WEATHER_STATUS_DRIZZLE,
  WEATHER_STATUS_DUST,
  WEATHER_STATUS_FOG,
  WEATHER_STATUS_HAZE,
  WEATHER_STATUS_MIST,
  WEATHER_STATUS_RAIN,
  WEATHER_STATUS_SAND,
  WEATHER_STATUS_SMOKE,
  WEATHER_STATUS_SNOW,
  WEATHER_STATUS_SQUALL,
  WEATHER_STATUS_THUNDERSTORM,
  WEATHER_STATUS_TORNADO,
} from './constants';


export function getTimeInMilan(offset) {
  return new Date((new Date().getTime()));
}

export function getWordCount(string) {
  const matches = string.match(/\S+/g);
  return matches ? matches.length : 0;
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
}

// https://stackoverflow.com/a/38230545/5592308
export function getTransformTranslation(transform) {
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttributeNS(null, 'transform', transform);

  const { matrix } = g.transform.baseVal.consolidate();
  return [matrix.e, matrix.f];
}

export function scaleVectorGroup(id, scaling) {
  const vectorGroup = d3.selectAll(id);
  const vectorGroupCoordinates = getTransformTranslation(vectorGroup.attr('transform'));
  vectorGroup.attr('transform', `scale(${scaling}) translate(${vectorGroupCoordinates[0]},${vectorGroupCoordinates[1]})`);
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
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 201: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: WEATHER_INTENSITY_MEDIUM,
      };
    }
    case 202: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 210: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 211: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: WEATHER_INTENSITY_MEDIUM,
      };
    }
    case 212: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 221: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 230: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 231: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 232: {
      return {
        status: WEATHER_STATUS_THUNDERSTORM,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 300: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 301: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 302: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 310: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 311: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 312: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 313: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 314: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 321: {
      return {
        status: WEATHER_STATUS_DRIZZLE,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 500: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 501: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: WEATHER_INTENSITY_MEDIUM,
      };
    }
    case 502: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 503: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 504: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 511: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: WEATHER_INTENSITY_MEDIUM,
      };
    }
    case 520: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 521: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: WEATHER_INTENSITY_MEDIUM,
      };
    }
    case 522: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 531: {
      return {
        status: WEATHER_STATUS_RAIN,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 600: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 601: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: WEATHER_INTENSITY_MEDIUM,
      };
    }
    case 602: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }
    case 611: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 612: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 613: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 615: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 616: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: WEATHER_INTENSITY_MEDIUM,
      };
    }
    case 620: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 621: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: WEATHER_INTENSITY_MEDIUM,
      };
    }
    case 622: {
      return {
        status: WEATHER_STATUS_SNOW,
        intensity: WEATHER_INTENSITY_HIGH,
      };
    }

    case 701: {
      return {
        status: WEATHER_STATUS_MIST,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 711: {
      return {
        status: WEATHER_STATUS_SMOKE,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 721: {
      return {
        status: WEATHER_STATUS_HAZE,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 731: {
      return {
        status: WEATHER_STATUS_DUST,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 741: {
      return {
        status: WEATHER_STATUS_FOG,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 751: {
      return {
        status: WEATHER_STATUS_SAND,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 761: {
      return {
        status: WEATHER_STATUS_DUST,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 762: {
      return {
        status: WEATHER_STATUS_ASH,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 771: {
      return {
        status: WEATHER_STATUS_SQUALL,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 781: {
      return {
        status: WEATHER_STATUS_TORNADO,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 800: {
      return {
        status: WEATHER_STATUS_CLEAR,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 801: {
      return {
        status: WEATHER_STATUS_CLOUDS,
        intensity: WEATHER_INTENSITY_LOW,
      };
    }
    case 802: {
      return {
        status: WEATHER_STATUS_CLOUDS,
        intensity: WEATHER_INTENSITY_MEDIUM,
      };
    }
    case 803: {
      return {
        status: WEATHER_STATUS_CLOUDS,
        intensity: WEATHER_INTENSITY_MEDIUM,
      };
    }
    case 804: {
      return {
        status: WEATHER_STATUS_CLOUDS,
        intensity: WEATHER_INTENSITY_HIGH,
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
