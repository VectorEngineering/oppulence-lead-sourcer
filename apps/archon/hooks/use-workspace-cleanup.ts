import { useWorkspaceStore } from "@/lib/stores/workspace-store";
import { useClerk } from "@clerk/nextjs";
import { useCallback } from "react";

export function useWorkspaceCleanup() {
  const { signOut } = useClerk();
  const clearWorkspaceState = useWorkspaceStore(
    (state) => state.clearWorkspaceState,
  );

  const handleSignOut = useCallback(async () => {
    // Clear workspace state before signing out
    clearWorkspaceState();
    // Perform sign out
    await signOut();
  }, [signOut, clearWorkspaceState]);

  return { handleSignOut };
}
