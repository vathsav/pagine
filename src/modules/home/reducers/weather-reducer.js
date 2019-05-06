import { ACTION_FETCH_WEATHER } from '../../../utils/constants';


export default function weatherReducer(state = {}, action) {
  switch (action.type) {
    case ACTION_FETCH_WEATHER:
      return action.payload;
    default: return state;
  }
}
