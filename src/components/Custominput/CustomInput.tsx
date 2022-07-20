import React from "react";
import styles from "./CustomInput.module.scss";

interface ICustomInput {
  type: string;
  name: string;
  handleChange?: (e: any) => void;
  placeholder: string;
  extraStyles?: any;
}

const CustomInput: React.FC<ICustomInput> = ({
  type,
  name,
  handleChange,
  placeholder,
  extraStyles = {},
}) => {
  return (
    <input
      className={styles.customInput}
      type={type}
      name={name}
      onChange={(e: any) => {
        handleChange && handleChange(e.target.value);
      }}
      placeholder={placeholder}
      style={{ ...extraStyles }}
    />
  );
};

export default CustomInput;
