import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceMemberCreateNestedManyWithoutWorkspaceInputSchema } from './WorkspaceMemberCreateNestedManyWithoutWorkspaceInputSchema';
import { WorkspaceInvitationCreateNestedManyWithoutWorkspaceInputSchema } from './WorkspaceInvitationCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceCreateWithoutOwnerInputSchema: z.ZodType<Prisma.WorkspaceCreateWithoutOwnerInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  members: z.lazy(() => WorkspaceMemberCreateNestedManyWithoutWorkspaceInputSchema).optional(),
  workspaceInvitations: z.lazy(() => WorkspaceInvitationCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceCreateWithoutOwnerInputSchema;
