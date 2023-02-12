import { type ReactNode, type ChangeEvent } from "react";
import { InputType } from "../../types";
import "./input.scss";

export interface InputProps {
  value?: string;
  type?: string;
  onChange?: (value: string | number) => void;
  isDecimal?: boolean;
  children?: ReactNode;
}

const Input = ({ value, type, onChange, isDecimal }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let modifiedValue: string | number = e.target.value;

    // Restricting the copy of content enclosed between "<" and ">"
    if (modifiedValue.includes("<")) {
      while (modifiedValue.includes(">"))
        modifiedValue = modifiedValue.replace(">", "");
    }

    modifiedValue =
      type === InputType.NUMBER && !isDecimal
        ? modifiedValue
          ? parseInt(modifiedValue)
          : ""
        : modifiedValue;

    onChange(modifiedValue);
  };

  return (
    <div className="hh-input">
      <input
        className="hh-input-main"
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  //   value: "",
  isDecimal: false,
  onChange: () => undefined,
};

export default Input;
