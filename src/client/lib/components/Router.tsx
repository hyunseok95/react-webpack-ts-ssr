// import Image from "next/image";
import { CSSProperties, ReactNode } from "react";
import styled from "@emotion/styled";
// import Box from "@mui/material/Box";

import { StaticRouter } from "react-router-dom/server";
import { BrowserRouter } from "react-router-dom";

interface RouterComponentProps {
  children: React.ReactNode;
  url?: string;
}

export default function Router(
  props: RouterComponentProps,
  context?: any
): React.ReactNode {
  return <>{props.children}</>;
}
