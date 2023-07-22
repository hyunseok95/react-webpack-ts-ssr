import React from "react";
import Link from "../components/Link";

interface MyProps {
  name?: string;
}

export const Other: React.FunctionComponent<MyProps> = function (
  props: MyProps,
  context?: any
): React.ReactNode {
  return <Link url="/">go other</Link>;
};
