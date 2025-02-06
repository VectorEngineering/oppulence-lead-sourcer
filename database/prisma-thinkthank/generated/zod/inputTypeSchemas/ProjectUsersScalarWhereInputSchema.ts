import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { RoleSchema } from './RoleSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProjectUsersScalarWhereInputSchema: z.ZodType<Prisma.ProjectUsersScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectUsersScalarWhereInputSchema),z.lazy(() => ProjectUsersScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectUsersScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectUsersScalarWhereInputSchema),z.lazy(() => ProjectUsersScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default ProjectUsersScalarWhereInputSchema;
