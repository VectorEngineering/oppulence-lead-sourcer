// Import global styles
import "../app/globals.css";

import type { Preview } from "@storybook/react";
import { SidebarProvider } from "../components/ui/sidebar";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#0f172a",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-background min-h-screen">
        <SidebarProvider>
          <Story />
        </SidebarProvider>
      </div>
    ),
  ],
};

export default preview;
