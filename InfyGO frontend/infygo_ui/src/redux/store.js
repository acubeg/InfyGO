// store.js
import { legacy_createStore as createStore, combineReducers} from 'redux'

import counterReducer from './reducer/counterReducer';
import userReducer from './reducer/userReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
