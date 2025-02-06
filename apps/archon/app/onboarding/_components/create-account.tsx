"use client";

import { createAccount } from "@/app/actions/users/create-account-action";
import { updateUserMetadata } from "@/app/actions/users/update-user-metadata-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface CreateAccountProps {
  onComplete: () => void;
}

export function CreateAccount({ onComplete }: CreateAccountProps) {
  const { execute: executeUpdateMetadata } = useAction(updateUserMetadata);
  const { execute, status } = useAction(createAccount, {
    onSuccess: async () => {
      // Update user metadata after account creation
      await executeUpdateMetadata({
        data: { hasProfile: true },
      });
      toast.success("Account created successfully!");
      onComplete();
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.error.serverError || "Failed to create account");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    execute({ username });
  };

  const isPending = status === "executing";

  return (
    <div className="w-full max-w-3xl px-4 md:px-8">
      <h1 className="mb-1 text-2xl font-semibold">Create your account</h1>
      <p className="mb-8 text-gray-500">Choose a username to get started.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="w-full">
          <label
            htmlFor="username"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Username*
          </label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Choose a username"
            required
            minLength={3}
            className="w-full"
          />
        </div>

        <Button
          className="bg-primary hover:bg-primary/90 w-full"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Creating..." : "Continue"}
        </Button>
      </form>
    </div>
  );
}
