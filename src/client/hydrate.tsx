import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./app";

declare global {
  interface Window {
    hydration: any;
  }
}

hydrateRoot(document, <App hydration={window.hydration} />);
