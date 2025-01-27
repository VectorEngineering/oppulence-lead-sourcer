import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const WorkspaceMemberScalarWhereInputSchema: z.ZodType<Prisma.WorkspaceMemberScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WorkspaceMemberScalarWhereInputSchema),z.lazy(() => WorkspaceMemberScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkspaceMemberScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkspaceMemberScalarWhereInputSchema),z.lazy(() => WorkspaceMemberScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  workspaceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default WorkspaceMemberScalarWhereInputSchema;
