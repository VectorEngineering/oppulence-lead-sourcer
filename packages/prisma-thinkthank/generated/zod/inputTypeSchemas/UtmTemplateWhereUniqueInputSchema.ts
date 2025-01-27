import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UtmTemplateProjectIdNameCompoundUniqueInputSchema } from './UtmTemplateProjectIdNameCompoundUniqueInputSchema';
import { UtmTemplateWhereInputSchema } from './UtmTemplateWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { ProjectNullableRelationFilterSchema } from './ProjectNullableRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const UtmTemplateWhereUniqueInputSchema: z.ZodType<Prisma.UtmTemplateWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    projectId_name: z.lazy(() => UtmTemplateProjectIdNameCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    projectId_name: z.lazy(() => UtmTemplateProjectIdNameCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  projectId_name: z.lazy(() => UtmTemplateProjectIdNameCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => UtmTemplateWhereInputSchema),z.lazy(() => UtmTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UtmTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UtmTemplateWhereInputSchema),z.lazy(() => UtmTemplateWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  utm_source: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  utm_medium: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  utm_campaign: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  utm_term: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  utm_content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ref: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectNullableRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional().nullable(),
}).strict());

export default UtmTemplateWhereUniqueInputSchema;
