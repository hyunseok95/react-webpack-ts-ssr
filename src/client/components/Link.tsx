import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { IS_DEV } from "../lib/constant";

interface LinkProps {
  url: string;
  children: React.ReactNode;
}

export default function Link(props: LinkProps, context?: any): React.ReactNode {
  switch (IS_DEV) {
    case true:
      return <ReactLink to={props.url}>{props.children}</ReactLink>;
    case false:
      return <a href={props.url}> {props.children} </a>;
  }
}
