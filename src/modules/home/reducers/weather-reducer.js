import { ACTION_FETCH_WEATHER } from '../../../utils/constants';


export default function weatherReducer(state = {}, action) {
  if (action.type === ACTION_FETCH_WEATHER) {
    return action.payload;
  }

  return state;
}
