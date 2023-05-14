import type { Meta, StoryObj } from "@storybook/react";

import Select from "./select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
  args: {
    options: [
      {
        value: "featured",
        label: "Featured",
      },
      {
        value: "ui",
        label: "UI",
      },
      {
        value: "ux",
        label: "UX",
      },
      {
        value: "enhancement",
        label: "Enhancement",
      },
      {
        value: "bug",
        label: "Bug",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
