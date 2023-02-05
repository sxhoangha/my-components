import "./input.scss";

interface InputProps {
  value?: string;
  type?: string;
  onChange?: (value: string) => void;
}

const Input = ({ value, type }: InputProps) => {
  return (
    <div className="hh-input">
      <input className="hh-input-main" type={type} value={value} />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  //   value: "",
};

export default Input;
