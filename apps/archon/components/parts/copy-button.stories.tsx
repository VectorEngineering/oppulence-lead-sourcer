import type { Meta, StoryObj } from "@storybook/react";

import CopyButton from "./copy-button";

const meta: Meta<typeof CopyButton> = {
  component: CopyButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A button component that copies text to clipboard with visual feedback.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "The text to be copied to clipboard",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  args: {
    text: "Hello, World!",
  },
};

export const LongText: Story = {
  args: {
    text: "This is a longer text that will be copied to the clipboard when clicking the button.",
  },
};
