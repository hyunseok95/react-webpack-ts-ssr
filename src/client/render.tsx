import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Other } from "./pages/other";
import store from "./state";

export default function App(props: any, context?: any): React.ReactNode {
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
createRoot(root).render(<App serverSideProps={window.__SERVER_SIDE_PROPS__} />);
