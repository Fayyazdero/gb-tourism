import { CURRENT_THEME, CURRENT_THEME_ERROR } from "../constants/theme";

export const themeAction = (theme) => async (dispatch) => {
  try {
    const updateTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", JSON.stringify(updateTheme));
    dispatch({
      type: CURRENT_THEME,
      payload: updateTheme,
    });
  } catch (error) {
    dispatch({
      type: CURRENT_THEME_ERROR,
      payload: error,
    });
  }
};
