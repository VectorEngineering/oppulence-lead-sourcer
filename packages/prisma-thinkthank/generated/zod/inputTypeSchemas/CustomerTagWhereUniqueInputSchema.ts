import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerTagWhereInputSchema } from './CustomerTagWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { CustomerRelationFilterSchema } from './CustomerRelationFilterSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const CustomerTagWhereUniqueInputSchema: z.ZodType<Prisma.CustomerTagWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => CustomerTagWhereInputSchema),z.lazy(() => CustomerTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CustomerTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CustomerTagWhereInputSchema),z.lazy(() => CustomerTagWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  customerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  customer: z.union([ z.lazy(() => CustomerRelationFilterSchema),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
}).strict());

export default CustomerTagWhereUniqueInputSchema;
