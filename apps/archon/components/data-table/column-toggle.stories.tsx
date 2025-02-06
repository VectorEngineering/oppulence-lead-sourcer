import type { Meta, StoryObj } from "@storybook/react";

import type { Table } from "@tanstack/react-table";
import { DataTableViewOptions } from "./column-toggle";

/**
 * The DataTableViewOptions component provides column visibility controls for data tables.
 * It allows users to show/hide specific columns through a dropdown menu interface.
 */
const meta: Meta<typeof DataTableViewOptions> = {
  component: DataTableViewOptions,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
                    # Column Toggle Component
                    
                    A dropdown menu component that allows users to toggle the visibility of table columns.
                    
                    ## Features
                    - Toggle individual column visibility
                    - Responsive design
                    - Accessible controls
                    - Integration with TanStack Table
                    
                    ## Usage
                    Use this component within a data table toolbar to provide column management capabilities.
                    The component automatically syncs with the table's column state.
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
type Story = StoryObj<typeof DataTableViewOptions>;

// Mock table data for stories
const mockTableWithColumns = {
  getAllColumns: () => [
    {
      id: "name",
      accessorFn: () => {},
      getCanHide: () => true,
      getIsVisible: () => true,
      toggleVisibility: () => {},
    },
    {
      id: "email",
      accessorFn: () => {},
      getCanHide: () => true,
      getIsVisible: () => true,
      toggleVisibility: () => {},
    },
    {
      id: "role",
      accessorFn: () => {},
      getCanHide: () => true,
      getIsVisible: () => false,
      toggleVisibility: () => {},
    },
  ],
} as unknown as Table<any>;

/**
 * Default presentation of the column toggle
 */
export const Default: Story = {
  args: {
    table: mockTableWithColumns,
  },
};

/**
 * Example with some columns hidden
 */
export const WithHiddenColumns: Story = {
  args: {
    table: {
      ...mockTableWithColumns,
      getAllColumns: () => [
        {
          id: "name",
          accessorFn: () => {},
          getCanHide: () => true,
          getIsVisible: () => true,
          toggleVisibility: () => {},
        },
        {
          id: "email",
          accessorFn: () => {},
          getCanHide: () => true,
          getIsVisible: () => false,
          toggleVisibility: () => {},
        },
        {
          id: "role",
          accessorFn: () => {},
          getCanHide: () => true,
          getIsVisible: () => false,
          toggleVisibility: () => {},
        },
      ],
    } as unknown as Table<any>,
  },
};

/**
 * Example with non-hideable columns
 */
export const WithLockedColumns: Story = {
  args: {
    table: {
      ...mockTableWithColumns,
      getAllColumns: () => [
        {
          id: "name",
          accessorFn: () => {},
          getCanHide: () => false,
          getIsVisible: () => true,
          toggleVisibility: () => {},
        },
        {
          id: "email",
          accessorFn: () => {},
          getCanHide: () => true,
          getIsVisible: () => true,
          toggleVisibility: () => {},
        },
        {
          id: "role",
          accessorFn: () => {},
          getCanHide: () => true,
          getIsVisible: () => true,
          toggleVisibility: () => {},
        },
      ],
    } as unknown as Table<any>,
  },
};

/**
 * Mobile view example
 */
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    table: mockTableWithColumns,
  },
};
