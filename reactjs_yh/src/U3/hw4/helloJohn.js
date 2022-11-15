import React from "react";
import { useEffect, useState } from "react";

export default function helloJohn() {
  const [name, setName] = useState("John");
  const [input, setInput] = useState("");
  const handleKeydown = (e) => {
    if (e.keyCode === 13) {
      setName(input);
    }
    // console.log(e.keyCode);
  };
  return (
    <>
      <input
        value={input}
        placeholder="type a name"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeydown}
      ></input>
      <h1>Hello {name}!</h1>
    </>
  );
}
