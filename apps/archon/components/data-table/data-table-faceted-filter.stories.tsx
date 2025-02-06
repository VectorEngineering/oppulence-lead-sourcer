import type { Meta, StoryObj } from "@storybook/react";
import { MailIcon, UserIcon } from "lucide-react";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";

const meta: Meta<typeof DataTableFacetedFilter> = {
  component: DataTableFacetedFilter,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
                    Faceted filter component for the DataTable.
                    Features:
                    - Multiple selection filter
                    - Search functionality
                    - Badge indicators
                    - Icon support
                `,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-background p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DataTableFacetedFilter>;

const options = [
  {
    label: "User",
    value: "user",
    icon: UserIcon,
  },
  {
    label: "Admin",
    value: "admin",
    icon: MailIcon,
  },
];

export const Default: Story = {
  args: {
    title: "Role",
    options: options,
  },
};
