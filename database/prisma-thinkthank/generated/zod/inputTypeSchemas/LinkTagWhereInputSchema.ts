import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LinkRelationFilterSchema } from './LinkRelationFilterSchema';
import { LinkWhereInputSchema } from './LinkWhereInputSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const LinkTagWhereInputSchema: z.ZodType<Prisma.LinkTagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LinkTagWhereInputSchema),z.lazy(() => LinkTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LinkTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LinkTagWhereInputSchema),z.lazy(() => LinkTagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  linkId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  link: z.union([ z.lazy(() => LinkRelationFilterSchema),z.lazy(() => LinkWhereInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
}).strict();

export default LinkTagWhereInputSchema;
