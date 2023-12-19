import { useEffect, useState } from "react";
import "./assets/scss/index.scss";
import MultiSelect from "./components/MultiSelect/MultiSelect";

import Sport from "./assets/icons/svg/Sport.svg";
import Art from "./assets/icons/svg/Art.svg";
import Game from "./assets/icons/svg/Game.svg";
import Education from "./assets/icons/svg/Education.svg";
import Science from "./assets/icons/svg/Science.svg";
import New from "./assets/icons/svg/New.svg";

interface OptionsType {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

function App() {
  const [options, setOptions] = useState<OptionsType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<OptionsType[] | null>(null);

  //handle create new category
  const handleOnCreate = (newOption: string) => {
    const tempOption = {
      value: newOption,
      label: newOption,
      icon: New,
    };

    setIsLoading(true);

    // used a small timer for show create new item loader
    setTimeout(() => {
      setIsLoading(false);
      setOptions((prev) => [...prev, tempOption]);
    }, 500);
  };

  // handle value select
  const onChange = (value: any) => {
    setValue(value);
  };

  useEffect(() => {
    // set options on component load
    setOptions([
      { value: "education", label: "Education", icon: Education },
      { value: "art", label: "Art", icon: Art },
      { value: "sport", label: `Sport`, icon: Sport },
      { value: "science", label: "Science", icon: Science },
      { value: "game", label: "Game", icon: Game },
    ]);
  }, []);

  return (
    <>
      <div>
        <h1>Multi select dropdown</h1>
        <MultiSelect
          options={options}
          value={value}
          isLoading={isLoading}
          onChange={onChange}
          handleOnCreate={handleOnCreate}
        />
      </div>
    </>
  );
}

export default App;
