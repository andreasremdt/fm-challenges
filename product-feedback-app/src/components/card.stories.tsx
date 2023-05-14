import type { Meta, StoryObj } from "@storybook/react";

import Card from "./card";
import Typography from "./typography";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["primary", "secondary", "tertiary"],
    },
    as: {
      type: "string",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Simple: Story = {
  args: {
    children: <Typography>Whereas disregard and contempt for human rights have resulted</Typography>,
  },
};

export const Colored: Story = {
  args: {
    color: "primary",
    children: <Typography>Whereas disregard and contempt for human rights have resulted</Typography>,
  },
};
