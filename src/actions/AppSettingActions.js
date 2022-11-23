import { SET_THEME } from 'Actions/types';

export const setTheme = (payload) => (dispatch) => {
  localStorage.setItem('theme', payload);

  dispatch({ type: SET_THEME, payload });
};
