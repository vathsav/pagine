import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import weatherReducer from './modules/home/reducers/weather-reducer';

export default combineReducers({
  firestoreReducer,
  firebaseReducer,
  weatherReducer,
});
