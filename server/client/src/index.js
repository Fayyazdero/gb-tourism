import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/index";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./helpers/scrollHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
// import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory({ window });
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
);
