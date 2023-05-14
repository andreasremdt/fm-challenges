import type { Meta, StoryObj } from "@storybook/react";

import Badge from "./badge";
import { icons } from "./icon";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
  argTypes: {
    icon: {
      options: icons,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "UX",
  },
};

export const Upvote: Story = {
  args: {
    icon: "arrow-up",
    children: "100",
  },
};
