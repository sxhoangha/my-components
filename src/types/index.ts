interface IUser {
  name: string;
}

enum InputType {
  TEXT = "text",
  PASSWORD = "password",
  NUMBER = "number",
}

export { type IUser, InputType };
