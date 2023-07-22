import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/store";
import { increment } from "../lib/store/CounterReducer";

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
      <a href="/other">go other</a>
    </>
  );
};
