import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutWorkspaceMembersInputSchema } from './UserCreateNestedOneWithoutWorkspaceMembersInputSchema';

export const WorkspaceMemberCreateWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceMemberCreateWithoutWorkspaceInput> = z.object({
  id: z.string().cuid().optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWorkspaceMembersInputSchema)
}).strict();

export default WorkspaceMemberCreateWithoutWorkspaceInputSchema;
