import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumRoleWithAggregatesFilterSchema } from './EnumRoleWithAggregatesFilterSchema';
import { RoleSchema } from './RoleSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ProjectUsersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectUsersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectUsersScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectUsersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectUsersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectUsersScalarWhereWithAggregatesInputSchema),z.lazy(() => ProjectUsersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleWithAggregatesFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default ProjectUsersScalarWhereWithAggregatesInputSchema;
