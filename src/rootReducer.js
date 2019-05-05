import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import homeReducer from './modules/home/reducers';

export default combineReducers({
  homeReducer,
  firestoreReducer,
  firebaseReducer,
});
