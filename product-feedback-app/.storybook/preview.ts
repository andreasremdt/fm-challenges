import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { theme } from "../tailwind.config";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: (theme as any).colors.gray[200],
        },
        {
          name: "white",
          value: (theme as any).colors.white,
        },
      ],
    },
  },
};

export default preview;
