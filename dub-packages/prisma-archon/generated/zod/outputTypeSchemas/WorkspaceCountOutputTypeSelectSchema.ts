import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const WorkspaceCountOutputTypeSelectSchema: z.ZodType<Prisma.WorkspaceCountOutputTypeSelect> = z.object({
  members: z.boolean().optional(),
  workspaceInvitations: z.boolean().optional(),
}).strict();

export default WorkspaceCountOutputTypeSelectSchema;
