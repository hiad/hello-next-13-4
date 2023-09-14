"use client";
import { useState } from "react";

const CENSORED_CLASS = "censored";

function Censored({ children }) {
  const [isCensored, setIsCensored] = useState(CENSORED_CLASS);
  return (
    <button
      onMouseEnter={() => {
        setIsCensored("");
      }}
      onMouseLeave={() => setIsCensored(CENSORED_CLASS)}
      className={isCensored}
    >
      {children}
    </button>
  );
}
export default Censored;
