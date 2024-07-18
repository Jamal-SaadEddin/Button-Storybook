import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = {
  args: {
    variant: "primary",
    size: "medium",
    color: "#007bff",
    children: "Default Button",
  },
};

export const Primary = {
  args: {
    ...Default.args,
    children: "Primary Button",
  },
};

export const Secondary = {
  args: {
    ...Default.args,
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Text = {
  args: {
    ...Default.args,
    variant: "text",
    children: "Text Button",
  },
};

export const Large = {
  args: {
    ...Default.args,
    size: "large",
    color: "#007bff",
    children: "Large Button",
  },
};

export const Medium = {
  args: {
    ...Default.args,
    size: "medium",
    color: "#28a745",
    children: "Medium Button",
  },
};

export const Small = {
  args: {
    ...Default.args,
    size: "small",
    color: "#dc3545",
    children: "Small Button",
  },
};
