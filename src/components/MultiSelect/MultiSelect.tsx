import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { OptionProps, components } from "react-select";

import styles from "./MultiSelect.module.scss";

import Sport from "./../../assets/icons/svg/Sport.svg";
import Art from "./../../assets/icons/svg/Art.svg";
import Game from "./../../assets/icons/svg/Game.svg";
import Education from "./../../assets/icons/svg/Education.svg";

interface OptionsType {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const CustomOptions = (props: OptionProps<any>) => {
  return (
    <components.Option {...props}>
      <span className={styles.optionContainer}>
        {props.data.label}
        <img
          src={props.data.icon}
          alt={props.data.label}
          className={styles.categoryIcon}
        />
      </span>
    </components.Option>
  );
};

const MultiSelect = () => {
  const [options, setOptions] = useState<OptionsType[] | []>([]);

  useEffect(() => {
    setOptions([
      { value: "education", label: "Education", icon: Education },
      { value: "art", label: "Art", icon: Art },
      { value: "sport", label: `Sport`, icon: Sport },
      { value: "science", label: "Science", icon: <></> },
      { value: "game", label: "Game", icon: Game },
    ]);
  }, []);

  return (
    <div>
      <CreatableSelect
        components={{ Option: CustomOptions }}
        options={options}
      />
    </div>
  );
};

export default MultiSelect;
