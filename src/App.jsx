import { useState } from "react";
import Card from "./components/Card";
import Toggle from "./components/Toggle";

const App = () => {
  const [toggleMode, setToggleMode] = useState(false);

  return (
    <div
      className={`${
        toggleMode ? "bg-white" : "bg-neutral-darkBlue"
      } h-[100vh] flex flex-col justify-center items-center`}
    >
      <Toggle toggleMode={toggleMode} setToggleMode={setToggleMode} />
      <Card/>
    </div>
  );
};

export default App;
