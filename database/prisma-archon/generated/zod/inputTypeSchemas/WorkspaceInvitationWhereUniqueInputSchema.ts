import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceInvitationWhereInputSchema } from './WorkspaceInvitationWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { WorkspaceRelationFilterSchema } from './WorkspaceRelationFilterSchema';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';

export const WorkspaceInvitationWhereUniqueInputSchema: z.ZodType<Prisma.WorkspaceInvitationWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => WorkspaceInvitationWhereInputSchema),z.lazy(() => WorkspaceInvitationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkspaceInvitationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkspaceInvitationWhereInputSchema),z.lazy(() => WorkspaceInvitationWhereInputSchema).array() ]).optional(),
  workspaceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  workspace: z.union([ z.lazy(() => WorkspaceRelationFilterSchema),z.lazy(() => WorkspaceWhereInputSchema) ]).optional(),
}).strict());

export default WorkspaceInvitationWhereUniqueInputSchema;
