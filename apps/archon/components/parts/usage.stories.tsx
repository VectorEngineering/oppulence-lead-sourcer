import type { Meta, StoryObj } from "@storybook/react";

import { Usage } from "./usage";

const meta: Meta<typeof Usage> = {
  component: Usage,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component that displays usage statistics and plan information.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    totalUsage: {
      control: "number",
      description: "Total allowed usage limit",
    },
    used: {
      control: "number",
      description: "Current usage amount",
    },
    plan: {
      control: "select",
      options: ["Free", "Pro", "Enterprise"],
      description: "Current subscription plan",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Usage>;

export const Default: Story = {
  args: {
    totalUsage: 1000,
    used: 250,
    plan: "Free",
  },
};

export const HighUsage: Story = {
  args: {
    totalUsage: 1000,
    used: 850,
    plan: "Pro",
  },
};

export const Enterprise: Story = {
  args: {
    totalUsage: 10000,
    used: 2500,
    plan: "Enterprise",
  },
};
