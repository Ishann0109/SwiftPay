import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // <BrowserRouter>
  <React.StrictMode>
  <Auth0Provider
  domain="dev-nfiy6ohk7oquais2.us.auth0.com"
  clientId="u8V8DuGWpVfilLshkjYOgvQ31wBsP6N6"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
      <App />
      </Auth0Provider>
      </React.StrictMode>,
  // </BrowserRouter>
  document.getElementById("root")
);
