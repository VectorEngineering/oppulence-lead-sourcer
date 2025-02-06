"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { completeOnboarding } from "../../app/actions/users/complete-onboarding-action";

const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  role: z.string().min(1, "Role is required"),
  useCase: z.string().min(1, "Please describe your use case"),
});

export function OnboardingForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { execute, status } = useAction(completeOnboarding, {
    onSuccess: () => {
      toast.success("Onboarding completed!");
      router.push("/dashboard");
    },
    onError: (args) => {
      toast.error(args.error.serverError || "Failed to complete onboarding");
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await execute({ onboardingComplete: true, ...values });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Acme Inc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Role</FormLabel>
              <FormControl>
                <Input placeholder="Developer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="useCase"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What will you use router.so for?</FormLabel>
              <FormControl>
                <Input
                  placeholder="Form handling, lead capture, etc."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={status === "executing"}
        >
          {status === "executing" ? "Setting up..." : "Complete Setup"}
        </Button>
      </form>
    </Form>
  );
}
