import React from "react";
import "./Button.css";

type ButtonProps = {
  variant: "primary" | "secondary" | "text";
  size: "small" | "medium" | "large";
  color: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, size, color, children }) => {
  return (
    <button
      className={`button ${variant} ${size}`}
      style={{ "--color": color } as React.CSSProperties}
    >
      {children}
    </button>
  );
};

export default Button;
