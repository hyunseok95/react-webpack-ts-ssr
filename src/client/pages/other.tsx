import React from "react";
import { Link } from "react-router-dom";

interface MyProps {
  name?: string;
}

export const Other: React.FunctionComponent<MyProps> = function (
  props: MyProps,
  context?: any
): React.ReactNode {
  return (
    <>
      <a href="/">go home</a>
    </>
  );
};
