import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  args: {
    children: "Whereas disregard and contempt for human rights have resulted ",
  },
  argTypes: {
    variant: {
      options: ["h1", "h2", "h3", "h4", "body1", "body2", "body3"],
    },
    as: {
      type: "string",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: "h1",
    as: "h1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    as: "h2",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    as: "h3",
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    as: "h4",
  },
};

export const Body1: Story = {
  args: {
    variant: "body1",
  },
};

export const Body2: Story = {
  args: {
    variant: "body2",
  },
};

export const Body3: Story = {
  args: {
    variant: "body3",
  },
};
