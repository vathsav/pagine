import React, { Component } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

// Utils
import {
  WEATHER_STATUS_ASH,
  WEATHER_STATUS_CLEAR,
  WEATHER_STATUS_CLOUDS,
  WEATHER_STATUS_DRIZZLE, WEATHER_STATUS_DUST, WEATHER_STATUS_FOG, WEATHER_STATUS_HAZE, WEATHER_STATUS_MIST,
  WEATHER_STATUS_RAIN, WEATHER_STATUS_SAND, WEATHER_STATUS_SMOKE,
  WEATHER_STATUS_SNOW, WEATHER_STATUS_SQUALL,
  WEATHER_STATUS_THUNDERSTORM, WEATHER_STATUS_TORNADO,
} from '../../../../../utils/constants';
import { resolveWeatherCode } from '../../../../../utils/helper';


class SkylineCondition extends Component {
  render() {
    const { weather } = this.props;
    const condition = resolveWeatherCode(weather.weather[0].id);

    switch (condition.status) {
      case WEATHER_STATUS_THUNDERSTORM:
        break;
      case WEATHER_STATUS_DRIZZLE:
        break;
      case WEATHER_STATUS_RAIN:
        break;
      case WEATHER_STATUS_SNOW:
        break;
      case WEATHER_STATUS_CLEAR:
        break;
      case WEATHER_STATUS_CLOUDS:
        break;
      case WEATHER_STATUS_MIST:
        break;
      case WEATHER_STATUS_SMOKE:
        break;
      case WEATHER_STATUS_HAZE:
        break;
      case WEATHER_STATUS_FOG:
        break;
      case WEATHER_STATUS_SAND:
        break;
      case WEATHER_STATUS_DUST:
        break;
      case WEATHER_STATUS_ASH:
        break;
      case WEATHER_STATUS_SQUALL:
        break;
      case WEATHER_STATUS_TORNADO:
        break;
      default:
        break;
    }

    return (
      <div id="chart-condition">
        <svg width="62px" height="26px">
          <g id="Website" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
            <g id="skyline" transform="translate(-109.000000, -141.000000)" stroke="#000000" strokeWidth="1.5">
              <g id="cloud-one" transform="translate(110.000000, 142.000000)">
                <path d="M46.3709624,19.9694398 C48.3364762,19.9582081 50.1756943,19.8247341 51.8886167,19.5690178 L51.8886165,19.5690168 C54.8914477,19.1207345 57.0861739,16.4999964 57.0003141,13.4651027 C56.9987055,13.4082446 56.9979013,13.3505644 56.9979013,13.2920622 C56.9979013,8.70537373 50.6075737,7.79649365 50.5024401,7.68610963 C48.1075522,5.17161967 44.3595469,2.10158867 41.0090739,2.58978913 C39.1555265,2.8598712 36.4907219,4.21889 33.0146602,6.66684553 C29.2225064,1.87107231 24.7256487,-0.337333245 19.5240871,0.0416288803 C14.8606792,0.38138358 11.0300226,4.79819468 8.03211748,13.2920622 C3.03560893,11.5932887 0.370804372,12.2727981 0.0377038021,15.3305904 C-0.295828377,18.3923448 1.58348752,19.9386279 5.67565149,19.9694398 C25.6752985,20.0101867 39.2404021,20.0101867 46.3709624,19.9694398 Z" id="cloud" />
                <path d="M27.9866878,23.5 L59.3888889,23.5" id="line" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

SkylineCondition.propTypes = {
  weather: PropTypes.object,
};

SkylineCondition.defaultProps = {
  weather: {},
};

export default SkylineCondition;
