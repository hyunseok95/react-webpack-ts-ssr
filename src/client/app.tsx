import React from "react";
import { Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
// import { useSyncExternalStore } from "react";
// import { todosStore } from "./hydrate-store";

import { Home } from "./views/home";
import { Other } from "./views/other";
interface MyProps {
  hydration?: any;
}

export default function App(props: MyProps, context?: any): React.ReactNode {
  // const todos = useSyncExternalStore(
  //   todosStore.subscribe,
  //   todosStore.getSnapshot,
  //   todosStore.getSnapshot
  // );

  // console.log(todos);
  // todosStore.addTodo()
  function logMessage() {
    console.log(props);
  }
  logMessage();

  const hydrateScript = `window.hydration=${JSON.stringify({
    ...props.hydration,
  })};`;

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon"></link>
        <script dangerouslySetInnerHTML={{ __html: hydrateScript }} />
        <title>My app</title>
      </head>
      <body>
        <React.Suspense>
          <StaticRouter location={props.hydration.url}>
            <Routes>
              <Route key="/" path="/" Component={Home} />;
              <Route key="/other" path="/other" Component={Other} />;
            </Routes>
          </StaticRouter>
        </React.Suspense>
        <script src="/static/index.js"></script>
      </body>
    </html>
  );
}
