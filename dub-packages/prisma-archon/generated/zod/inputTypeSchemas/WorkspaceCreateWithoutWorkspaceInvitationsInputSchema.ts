import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutWorkspacesInputSchema } from './UserCreateNestedOneWithoutWorkspacesInputSchema';
import { WorkspaceMemberCreateNestedManyWithoutWorkspaceInputSchema } from './WorkspaceMemberCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceCreateWithoutWorkspaceInvitationsInputSchema: z.ZodType<Prisma.WorkspaceCreateWithoutWorkspaceInvitationsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutWorkspacesInputSchema),
  members: z.lazy(() => WorkspaceMemberCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceCreateWithoutWorkspaceInvitationsInputSchema;
