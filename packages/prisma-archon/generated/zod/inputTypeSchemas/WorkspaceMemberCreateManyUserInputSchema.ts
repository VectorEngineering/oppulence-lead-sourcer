import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkspaceMemberCreateManyUserInputSchema: z.ZodType<Prisma.WorkspaceMemberCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  workspaceId: z.string(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default WorkspaceMemberCreateManyUserInputSchema;
