import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const WorkspaceInvitationScalarWhereInputSchema: z.ZodType<Prisma.WorkspaceInvitationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WorkspaceInvitationScalarWhereInputSchema),z.lazy(() => WorkspaceInvitationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkspaceInvitationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkspaceInvitationScalarWhereInputSchema),z.lazy(() => WorkspaceInvitationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  workspaceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default WorkspaceInvitationScalarWhereInputSchema;
