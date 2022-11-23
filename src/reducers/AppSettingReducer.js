import { SET_THEME } from 'Actions/types';
import AppConfig from 'Constants/AppConfig';

const INIT_STATE = {
  theme: localStorage.getItem('theme') ?? AppConfig.defaultTheme,
};

const AppSettingReducer = (state = INIT_STATE, { payload, type }) => {
  switch (type) {
    case SET_THEME:
      return { ...state, theme: payload };
    default:
      return { ...state };
  }
};

export default AppSettingReducer;
