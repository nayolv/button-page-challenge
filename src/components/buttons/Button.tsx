import { FC } from "react";

interface ButtonProps {
  text: string;
  bgColor: string;
  disabled: boolean;
  colorText: string;
  border: string;
  height: string;
  width: string;
  hasIcon: boolean;
  icon: string;
  iconClass: string;
  name: string;
}

export const Button: FC<ButtonProps> = ({
  text,
  bgColor,
  disabled,
  colorText,
  border,
  height,
  width,
  name,
  hasIcon,
  icon,
  iconClass,
}) => {
  return (
    <button
      className="button"
      disabled={disabled}
      style={{
        backgroundColor: bgColor,
        color: colorText,
        border: border,
        height: height,
        width: width,
        boxShadow: name.includes("disableShadow")
          ? "none"
          : "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}>
      {hasIcon && name.includes("start") && (
        <span className={`start-icon ${iconClass}`}>{icon}</span>
      )}

      <span className="btn-text">{text}</span>

      {hasIcon && name.includes("end") && (
        <span className={`end-icon ${iconClass}`}>{icon}</span>
      )}
    </button>
  );
};
