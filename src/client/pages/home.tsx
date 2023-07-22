import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../state";
import { increment } from "../state/counter";
import Link from "../components/Link";

interface MyProps {
  name?: string;
}

export const Home: React.FunctionComponent<MyProps> = function (
  props: MyProps,
  context?: any
): React.ReactNode {
  const [message, setMessage] = useState("");

  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  function handleCountClick() {
    dispatch(increment());
    console.log(count);
  }

  function handleOnChange(e: any) {
    setMessage(e.target.value);
    console.log(message);
  }

  function handleSendClick() {
    setMessage("");
    console.log("remove!");
  }

  return (
    <>
      <input value={message} onChange={handleOnChange} />
      <button onClick={handleSendClick}>Send</button>
      <button onClick={handleCountClick}>Count</button>
      <button onClick={handleCountClick}>Count</button>
      <Link url="/other">go other</Link>
    </>
  );
};
