"use client";

import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { addWorkspace } from "@/app/actions/workspaces/add-workspace-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface CreateWorkspaceDialogProps {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSuccess?: () => void;
}

export function CreateWorkspaceDialog({
  trigger,
  open,
  onOpenChange,
  onSuccess,
}: CreateWorkspaceDialogProps) {
  const [workspaceName, setWorkspaceName] = React.useState("");
  const [workspaceDescription, setWorkspaceDescription] = React.useState("");

  const { execute: executeAddWorkspace, status } = useAction(addWorkspace, {
    onSuccess: (result) => {
      if (result.data?.success) {
        toast.success("Workspace created successfully");
        onOpenChange?.(false);
        setWorkspaceName("");
        setWorkspaceDescription("");
        onSuccess?.();
      } else if (!result.data?.success) {
        toast.error("Failed to create workspace");
      }
    },
    onError: (error) => {
      toast.error(error.error?.serverError || "Failed to create workspace");
    },
  });

  const handleCreateWorkspace = async (e: React.FormEvent) => {
    e.preventDefault();
    await executeAddWorkspace({
      name: workspaceName,
      description: workspaceDescription,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Workspace</DialogTitle>
          <DialogDescription>
            Add a new workspace to manage your team and projects.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreateWorkspace} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Workspace Name</Label>
            <Input
              id="name"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="Enter workspace name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={workspaceDescription}
              onChange={(e) => setWorkspaceDescription(e.target.value)}
              placeholder="Enter workspace description (optional)"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange?.(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={status === "executing"}>
              {status === "executing" ? "Creating..." : "Create Workspace"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
