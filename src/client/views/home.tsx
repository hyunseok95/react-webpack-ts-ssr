import React, { useState } from "react";
import { Link } from "react-router-dom";

interface MyProps {
  name?: string;
}

export const Home: React.FunctionComponent<MyProps> = function (
  props: MyProps,
  context?: any
): React.ReactNode {
  const [message, setMessage] = useState("");

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
      <a href="/other">go other</a>
    </>
  );
};
