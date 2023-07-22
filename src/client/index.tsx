import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { IS_DEV } from "./lib/constant";
import App from "./pages";

declare global {
  interface ServerSideProps {
    url: string;
    params?: any;
  }

  interface Window {
    __SERVER_SIDE_PROPS__: ServerSideProps;
  }
}

switch (IS_DEV) {
  case true:
    const root = document.getElementById("root")!;
    createRoot(root).render(<App />);
    break;
  case false:
    hydrateRoot(
      document,
      <App serverSideProps={window.__SERVER_SIDE_PROPS__} />
    );
    break;
}
