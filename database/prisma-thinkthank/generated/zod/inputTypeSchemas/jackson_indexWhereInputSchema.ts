import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const jackson_indexWhereInputSchema: z.ZodType<Prisma.jackson_indexWhereInput> = z.object({
  AND: z.union([ z.lazy(() => jackson_indexWhereInputSchema),z.lazy(() => jackson_indexWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => jackson_indexWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => jackson_indexWhereInputSchema),z.lazy(() => jackson_indexWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  key: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  storeKey: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default jackson_indexWhereInputSchema;
