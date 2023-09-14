import React from "react";
import Censored from "../components/censored";
import HitCounter from "../components/hitcounter";

function Home() {
  return (
    <main>
      <h1>Hello Next!</h1>
      You are the visitor number{" "}
      <Censored>
        <HitCounter />
      </Censored>
    </main>
  );
}

export default Home;
