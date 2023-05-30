import React, { useLayoutEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import { GlobalStyle } from "./styles";
import { theme, invertTheme } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import "@pathofdev/react-tag-input/build/index.css";

const App = () => {
  const { theme: currentTheme } = useSelector((state) => state.theme);
  const isAdmin = false;
  const dispatch = useDispatch();

  useLayoutEffect(() => {}, [dispatch]);
  return (
    <ThemeProvider theme={currentTheme === "dark" ? invertTheme(theme) : theme}>
      <GlobalStyle whiteColor={currentTheme === "dark" ? false : true} />

      {isAdmin ? <AdminLayout /> : <UserLayout />}
    </ThemeProvider>
  );
};

export default App;
