import type { Meta, StoryObj } from "@storybook/react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./index";

// Sample data type
interface Person {
  id: string;
  name: string;
  email: string;
  role: string;
}

// Sample data
const sampleData: Person[] = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
];

// Sample columns
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const columns: ColumnDef<Person, any>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];

// Create a properly typed meta object for the DataTable
const meta = {
  title: "Components/DataTable",
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  component: DataTable<Person, any>,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
          A versatile data table component with sorting, filtering, and pagination capabilities.
          
          Features:
          - Column sorting
          - Text filtering
          - Pagination
          - Column visibility toggle
          - Responsive design
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: "object",
      description: "Column definitions for the table",
    },
    data: {
      control: "object",
      description: "Data to be displayed in the table",
    },
    filterColumn: {
      control: "text",
      description: "Column key to filter by",
      defaultValue: "name",
    },
    createObject: {
      control: "boolean",
      description: "Show create object button",
      defaultValue: false,
    },
  },
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
} satisfies Meta<typeof DataTable<Person, any>>;

export default meta;

// Create a properly typed Story
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: columns,
    data: sampleData,
    filterColumn: "name",
  },
};

export const WithCreateButton: Story = {
  args: {
    columns: columns,
    data: sampleData,
    filterColumn: "name",
    createObject: true,
  },
};

export const EmptyTable: Story = {
  args: {
    columns: columns,
    data: [],
    filterColumn: "name",
  },
};

export const FilterByEmail: Story = {
  args: {
    columns: columns,
    data: sampleData,
    filterColumn: "email",
  },
};
