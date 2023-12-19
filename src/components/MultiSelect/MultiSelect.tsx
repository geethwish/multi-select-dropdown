import React from "react";
import CreatableSelect from "react-select/creatable";
import { OptionProps, components } from "react-select";

import styles from "./MultiSelect.module.scss";
import New from "./../../assets/icons/svg/New.svg";
interface OptionsType {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface MultiSelectPropsType {
  options: OptionsType[] | [];
  isLoading: boolean;
  value: OptionsType[] | [] | null;
  handleOnCreate: (newOption: string) => void;
  onChange: (newOption: any) => void;
}

const CustomOptions = (props: OptionProps<any>) => {
  return (
    <components.Option {...props}>
      <span className={styles.optionContainer}>
        {props.data.label}
        <img
          src={props.data.icon ?? New}
          alt={props.data.label}
          className={styles.categoryIcon}
        />
      </span>
    </components.Option>
  );
};

const MultiSelect: React.FC<MultiSelectPropsType> = (props) => {
  const { options, isLoading, value, handleOnCreate, onChange } = props;

  return (
    <div>
      <CreatableSelect
        isMulti
        isClearable
        isLoading={isLoading}
        components={{ Option: CustomOptions }}
        options={options}
        onCreateOption={handleOnCreate}
        value={value}
        onChange={onChange}
        theme={(theme) => ({
          ...theme,
          borderRadius: 10,
          minHeight: 60,
          colors: {
            ...theme.colors,
            primary25: "#F2F5FF",
          },
        })}
        className="react-select"
      />
    </div>
  );
};

export default MultiSelect;
