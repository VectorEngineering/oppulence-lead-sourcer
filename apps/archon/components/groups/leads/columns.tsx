"use client";

import { DataTableColumnHeader } from "@/components/data-table/header";
import { Button } from "@/components/ui/button";
import type { Lead } from "@dub/prisma-archon/client";
import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import OptionsDropdown from "./options-dropdown";

export const columns: ColumnDef<Lead>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="ID" />;
    },
    cell: ({ row }) => {
      const id: string = row.getValue("id");
      return (
        <Button asChild size="sm" variant="outline">
          <Link href={`/leads/${id}`}>{id}</Link>
        </Button>
      );
    },
  },
  {
    accessorKey: "endpoint",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Endpoint" />;
    },
    cell: ({ row }) => {
      const endpoint: string = row.getValue("endpoint");
      return (
        <Link
          className="underline underline-offset-4 transition-all hover:opacity-70"
          href={`/portal/endpoints/${row.original.endpointId}/leads`}
        >
          {endpoint}
        </Link>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Date Created" />;
    },
    cell: ({ row }) => {
      const createdAt: Date = row.getValue("createdAt");
      const date = new Date(createdAt);
      return (
        <p className="text-xs">
          {date.toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
      );
    },
  },
  {
    accessorKey: "options",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Options" />;
    },
    cell: ({ row }) => {
      const id: string = row.getValue("id");
      return <OptionsDropdown id={id} />;
    },
    enableSorting: false,
  },
];
