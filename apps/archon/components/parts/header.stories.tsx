import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./header";

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A header component that displays a title with optional children content.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The main title text",
    },
    children: {
      control: "text",
      description: "Optional content to display after the title",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Dashboard",
  },
};

export const WithChildren: Story = {
  args: {
    title: "Settings",
    children: "User Preferences",
  },
};
