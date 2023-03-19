import Icon from ".";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const iconDefault = () => (
  <Icon name="action_delete" width={32} height={32} />
);

iconDefault.story = {
  name: "Default",
};

export const showingNotification = () => (
  <Icon name="action_delete" width={32} height={32} notificationContent={"2"} />
);

showingNotification.story = {
  name: "Notification",
};
