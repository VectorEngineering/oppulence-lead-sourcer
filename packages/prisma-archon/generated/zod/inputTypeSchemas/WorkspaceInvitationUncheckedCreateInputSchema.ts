import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkspaceInvitationUncheckedCreateInputSchema: z.ZodType<Prisma.WorkspaceInvitationUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  workspaceId: z.string(),
  email: z.string(),
  token: z.string(),
  status: z.string().optional(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default WorkspaceInvitationUncheckedCreateInputSchema;
