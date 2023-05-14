import type { Meta, StoryObj } from "@storybook/react";

import EmptyState from "./empty-state";
import Button from "./button";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "white",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "There's no feedback, yet.",
  },
};

export const WithDescription: Story = {
  args: {
    title: "There's no feedback, yet.",
    description:
      "Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.",
  },
};

export const WithButton: Story = {
  args: {
    title: "There's no feedback, yet.",
    description:
      "Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.",
    action: <Button>Add Feedback</Button>,
  },
};
