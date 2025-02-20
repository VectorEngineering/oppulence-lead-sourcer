import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectInviteEmailProjectIdCompoundUniqueInputSchema } from './ProjectInviteEmailProjectIdCompoundUniqueInputSchema';
import { ProjectInviteWhereInputSchema } from './ProjectInviteWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { RoleSchema } from './RoleSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectInviteWhereUniqueInputSchema: z.ZodType<Prisma.ProjectInviteWhereUniqueInput> = z.object({
  email_projectId: z.lazy(() => ProjectInviteEmailProjectIdCompoundUniqueInputSchema)
})
.and(z.object({
  email_projectId: z.lazy(() => ProjectInviteEmailProjectIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ProjectInviteWhereInputSchema),z.lazy(() => ProjectInviteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectInviteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectInviteWhereInputSchema),z.lazy(() => ProjectInviteWhereInputSchema).array() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export default ProjectInviteWhereUniqueInputSchema;
