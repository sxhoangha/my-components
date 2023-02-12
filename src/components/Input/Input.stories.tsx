import React, { useState } from "react";
import { InputType } from "../../types";
import Input, { type InputProps } from "./index";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const withStateInput =
  (Component) =>
  ({ ...props }: InputProps) => {
    const { value: propsValue, children } = props;
    const [value, setValue] = useState(propsValue || "");

    const onChange = (changedValue) => {
      setValue(changedValue);
    };
    return (
      <Component {...props} value={value} onChange={onChange}>
        {children}
      </Component>
    );
  };

const WrappedInput = withStateInput(Input);

export const Text = () => {
  return <WrappedInput type={InputType.TEXT} />;
};

export const Password = () => {
  return <WrappedInput type="password" />;
};
Password.story = {
  name: "Password",
};
