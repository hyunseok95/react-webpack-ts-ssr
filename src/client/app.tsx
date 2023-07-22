import React from "react";
import { Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

import { ServerSideProps } from "./state/hydrate-store";
import { Home } from "./views/home";
import { Other } from "./views/other";
import { Provider } from "react-redux";
import store from "./lib/store";

export default function App(
  props: Record<"serverSideProps", ServerSideProps>,
  context?: any
): React.ReactNode {
  const serverSideProps = `window.__SERVER_SIDE_PROPS__=${JSON.stringify({
    ...props.serverSideProps,
    isServer: !props.serverSideProps.isServer,
  })};`;

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon"></link>
        <script dangerouslySetInnerHTML={{ __html: serverSideProps }} />
        <title>My app</title>
      </head>
      <body>
        <Provider store={store}>
          <React.Suspense>
            <StaticRouter location={props.serverSideProps.url}>
              <Routes>
                <Route key="/" path="/" Component={Home} />;
                <Route key="/other" path="/other" Component={Other} />;
              </Routes>
            </StaticRouter>
          </React.Suspense>
        </Provider>
        <script src="/static/index.js"></script>
      </body>
    </html>
  );
}

// export function AApp(
//   props: Record<"serverSideProps", ServerSideProps>,
//   context?: any
// ): React.ReactNode {
//   const serverSideProps = `window.__SERVER_SIDE_PROPS__=${JSON.stringify({
//     ...props.serverSideProps,
//     isServer: !props.serverSideProps.isServer,
//   })};`;

//   return (
//     <Provider store={store}>
//     <App serverSideProps={window.__SERVER_SIDE_PROPS__} />
//   </Provider>
//   );
// }
