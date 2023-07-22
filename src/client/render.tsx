import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./lib/store";
import { Home } from "./views/home";
import { Other } from "./views/other";

interface MyProps {
  hydration?: any;
}

function App(props: MyProps, context?: any): React.ReactNode {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route key="/" path="/" Component={Home} />;
            <Route key="/other" path="/other" Component={Other} />;
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  );
}

const root = document.getElementById("root")!;
createRoot(root).render(<App />);
