import { combineReducers } from 'redux';

import AppSettingReducer from 'Reducers/AppSettingReducer';

const reducers = combineReducers({
  appSettings: AppSettingReducer,
});

export default reducers;
