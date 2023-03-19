import PropTypes from "prop-types";
import { type ReactNode, type FC } from "react";
import { classNames } from "../../shared/utils";
import "./button.scss";

export enum Variants {
  BASIC = "basic",
  ICON = "icon",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum ButtonSize {
  MICRO = "micro",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
interface ButtonProps {
  /**
   * The children node could be label or icon..
   */
  children: ReactNode;
  backgroundColor?: string;
  variant?: Variants;
  size?: ButtonSize;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  backgroundColor,
  size,
  children,
  variant,
  ...props
}: ButtonProps) => {
  const className = classNames("hh-button", {
    "hh-button--primary": variant === Variants.PRIMARY,
    "hh-button--secondary": variant === Variants.SECONDARY,
    "hh-btn--is-icon-btn": variant === Variants.ICON,
    "hh-button--micro": size === ButtonSize.MICRO,
    "hh-button--small": size === ButtonSize.SMALL,
    "hh-button--medium": size === ButtonSize.MEDIUM,
    "hh-button--large": size === ButtonSize.LARGE,
  });

  return (
    <button
      type="button"
      className={className}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  variant: Variants.BASIC,
  size: ButtonSize.MEDIUM,
  onClick: undefined,
};

export default Button;
