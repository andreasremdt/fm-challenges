import type { Meta, StoryObj } from "@storybook/react";

import Icon, { icons } from "./icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      options: Object.keys(icons),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    name: "arrow-down",
  },
};
