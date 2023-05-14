import type { Meta, StoryObj } from "@storybook/react";

import Input from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    value: "John Doe",
  },
};

export const WithError: Story = {
  args: {
    error: "Please enter a valid name.",
  },
};
