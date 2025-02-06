import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateNestedOneWithoutMembersInputSchema } from './WorkspaceCreateNestedOneWithoutMembersInputSchema';
import { UserCreateNestedOneWithoutWorkspaceMembersInputSchema } from './UserCreateNestedOneWithoutWorkspaceMembersInputSchema';

export const WorkspaceMemberCreateInputSchema: z.ZodType<Prisma.WorkspaceMemberCreateInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutMembersInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutWorkspaceMembersInputSchema)
}).strict();

export default WorkspaceMemberCreateInputSchema;
