import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { BrowserRouter } from "react-router-dom";
import { IS_DEV } from "../lib/constant";

interface RouterProps {
  url?: string;
  children: React.ReactNode;
}

export default function Router(
  props: RouterProps,
  context?: any
): React.ReactNode {
  switch (IS_DEV) {
    case true:
      return (
        <React.StrictMode>
          <BrowserRouter>{props.children}</BrowserRouter>
        </React.StrictMode>
      );
    case false:
      return (
        <React.Suspense>
          <StaticRouter location={props.url!}>{props.children}</StaticRouter>
        </React.Suspense>
      );
  }
}
