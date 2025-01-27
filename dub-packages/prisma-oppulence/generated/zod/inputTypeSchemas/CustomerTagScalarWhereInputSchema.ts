import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CustomerTagScalarWhereInputSchema: z.ZodType<Prisma.CustomerTagScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CustomerTagScalarWhereInputSchema),z.lazy(() => CustomerTagScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CustomerTagScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CustomerTagScalarWhereInputSchema),z.lazy(() => CustomerTagScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  customerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default CustomerTagScalarWhereInputSchema;
