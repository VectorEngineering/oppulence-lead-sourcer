import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LinkTagScalarWhereInputSchema: z.ZodType<Prisma.LinkTagScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LinkTagScalarWhereInputSchema),z.lazy(() => LinkTagScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LinkTagScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LinkTagScalarWhereInputSchema),z.lazy(() => LinkTagScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  linkId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default LinkTagScalarWhereInputSchema;
