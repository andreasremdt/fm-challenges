import type { Meta, StoryObj } from "@storybook/react";

import Label from "./label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
    },
    as: {
      type: "string",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Category",
  },
};

export const WithDescription: Story = {
  args: {
    children: "Category",
    description: "Choose a category for your feedback",
  },
};
