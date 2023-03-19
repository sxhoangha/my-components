import Button from "./Button";
import Icon from "../Icon";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  variant: "primary",
  children: "Large button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  variant: "secondary",
  children: "Medium button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  variant: "secondary",
  children: "Small button",
};

export const micro = () => {
  return (
    <Button variant="primary" size="micro">
      Micro button
    </Button>
  );
};

micro.story = {
  name: "Micro icon",
};

export const WithIcon = () => {
  return (
    <Button variant="icon" size="micro">
      <Icon name="action_delete" width={32} height={32} />
    </Button>
  );
};

WithIcon.story = {
  name: "With Icon",
};
