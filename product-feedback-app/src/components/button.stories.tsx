import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";
import Icon, { icons } from "./icon";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "neutral", "danger", "text"],
    },
    as: {
      options: ["a", "button"],
    },
    icon: {
      options: icons,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <Icon name="arrow-left" />,
  },
};
