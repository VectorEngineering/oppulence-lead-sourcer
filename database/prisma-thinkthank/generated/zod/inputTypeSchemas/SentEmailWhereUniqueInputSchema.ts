import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SentEmailWhereInputSchema } from './SentEmailWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { ProjectNullableRelationFilterSchema } from './ProjectNullableRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const SentEmailWhereUniqueInputSchema: z.ZodType<Prisma.SentEmailWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => SentEmailWhereInputSchema),z.lazy(() => SentEmailWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SentEmailWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SentEmailWhereInputSchema),z.lazy(() => SentEmailWhereInputSchema).array() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  projectId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectNullableRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional().nullable(),
}).strict());

export default SentEmailWhereUniqueInputSchema;
