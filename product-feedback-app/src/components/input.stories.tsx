import type { Meta, StoryObj } from "@storybook/react";

import Input from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "John Doe",
  },
};

export const WithError: Story = {
  args: {
    error: "Please enter a valid name.",
  },
};
