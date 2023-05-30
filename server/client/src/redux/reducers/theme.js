import { CURRENT_THEME, CURRENT_THEME_ERROR } from "../constants/theme";

const currentTheme = JSON.parse(localStorage.getItem("theme"));
const initialState = {
  theme: currentTheme ? currentTheme : null,
  error: null,
};

export const theme = (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENT_THEME:
      return { ...state, theme: payload };

    case CURRENT_THEME_ERROR:
      return { ...state, error: payload.error.message };

    default:
      return state;
  }
};
