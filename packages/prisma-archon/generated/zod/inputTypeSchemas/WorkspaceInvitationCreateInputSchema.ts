import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateNestedOneWithoutWorkspaceInvitationsInputSchema } from './WorkspaceCreateNestedOneWithoutWorkspaceInvitationsInputSchema';

export const WorkspaceInvitationCreateInputSchema: z.ZodType<Prisma.WorkspaceInvitationCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  token: z.string(),
  status: z.string().optional(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutWorkspaceInvitationsInputSchema)
}).strict();

export default WorkspaceInvitationCreateInputSchema;
