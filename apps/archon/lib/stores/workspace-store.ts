import { createJSONStorage, persist } from "zustand/middleware";

import type { Workspace } from "@dub/prisma-archon/client";
import { create } from "zustand";

interface WorkspaceState {
  activeWorkspace: Workspace | null;
  workspaces: Workspace[];
  setActiveWorkspace: (workspace: Workspace | null) => void;
  setWorkspaces: (workspaces: Workspace[]) => void;
  clearWorkspaceState: () => void;
}

// Create a function to clear storage on logout
export const clearWorkspaceStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("workspace-storage");
  }
};

export const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set) => ({
      activeWorkspace: null,
      workspaces: [],
      setActiveWorkspace: (workspace) => set({ activeWorkspace: workspace }),
      setWorkspaces: (workspaces) => {
        set({ workspaces });
        // If no active workspace is set, set the first workspace as active
        set((state) => ({
          activeWorkspace: state.activeWorkspace || workspaces[0] || null,
        }));
      },
      clearWorkspaceState: () => {
        set({ activeWorkspace: null, workspaces: [] });
        clearWorkspaceStorage();
      },
    }),
    {
      name: "workspace-storage",
      storage: createJSONStorage(() => localStorage),
      // Only persist these fields
      partialize: (state) => ({
        activeWorkspace: state.activeWorkspace,
        workspaces: state.workspaces,
      }),
    },
  ),
);
