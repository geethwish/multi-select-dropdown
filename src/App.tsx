import { useState } from "react";
import "./assets/scss/index.scss";
import MultiSelect from "./components/MultiSelect/MultiSelect";

function App() {
  return (
    <>
      <div>
        <h1>Multi select dropdown</h1>
        <MultiSelect />
      </div>
    </>
  );
}

export default App;
