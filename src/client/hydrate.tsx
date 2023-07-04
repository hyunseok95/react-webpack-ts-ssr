import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./app";
import { ServerSideProps } from "./state/hydrate-store";

declare global {
  interface Window {
    __SERVER_SIDE_PROPS__: ServerSideProps;
  }
}

hydrateRoot(document, <App serverSideProps={window.__SERVER_SIDE_PROPS__} />);
