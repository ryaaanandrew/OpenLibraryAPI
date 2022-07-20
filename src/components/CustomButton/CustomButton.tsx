import React from "react";
import styles from "./CustomButton.module.scss";

interface ICustomButton {
  label: string;
  handleChange?: (e: any) => void;
  extraStyles?: any;
}

const CustomButton: React.FC<ICustomButton> = ({
  label,
  handleChange,
  extraStyles = {},
}) => {
  return (
    <button
      className={styles.customButton}
      onChange={(e) => handleChange && handleChange(e)}
      style={{ ...extraStyles }}
      test-id={"customButton-id"}
    >
      {label}
    </button>
  );
};

export default CustomButton;
