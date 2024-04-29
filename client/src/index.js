import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import { Provider } from "react-redux";
import { reducers } from "./redux/reducers";

import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId= '560746587917-9tqs56sgke00deb4u1c7ouiu5g0k7v06.apps.googleusercontent.com'>
       <BrowserRouter>
          <App />
       </BrowserRouter>
     </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
