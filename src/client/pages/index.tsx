import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./home";
import { Other } from "./other";
import { Provider } from "react-redux";
import store from "../state";
import Router from "../components/Router";
import { IS_DEV } from "../lib/constant";

interface AppProps {
  serverSideProps?: ServerSideProps;
}

function Base(props: AppProps, context?: any): React.ReactNode {
  return (
    <Provider store={store}>
      <Router url={props.serverSideProps?.url}>
        <Routes>
          <Route key="/" path="/" Component={Home} />;
          <Route key="/other" path="/other" Component={Other} />;
        </Routes>
      </Router>
    </Provider>
  );
}

export default function App(props: AppProps, context?: any): React.ReactNode {
  switch (IS_DEV) {
    case true:
      return <Base />;
    case false:
      const serverSideProps = `window.__SERVER_SIDE_PROPS__=${JSON.stringify(
        props.serverSideProps
      )};`;
      return (
        <html>
          <head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="icon"
              href="/static/favicon.ico"
              type="image/x-icon"
            ></link>
            <script dangerouslySetInnerHTML={{ __html: serverSideProps }} />
            <title>My app</title>
          </head>
          <body>
            <Base serverSideProps={props.serverSideProps} />
            <script src="/static/index.js"></script>
          </body>
        </html>
      );
  }
}
