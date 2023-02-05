import Input from "./index";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Text = () => {
  return <Input />;
};

export const Password = () => {
  return <Input type="password" />;
};
Password.story = {
  name: "Showing password",
};
