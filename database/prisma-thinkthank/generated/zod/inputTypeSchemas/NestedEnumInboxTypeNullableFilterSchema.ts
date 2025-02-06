import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxTypeSchema } from './InboxTypeSchema';

export const NestedEnumInboxTypeNullableFilterSchema: z.ZodType<Prisma.NestedEnumInboxTypeNullableFilter> = z.object({
  equals: z.lazy(() => InboxTypeSchema).optional().nullable(),
  in: z.lazy(() => InboxTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => InboxTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => InboxTypeSchema),z.lazy(() => NestedEnumInboxTypeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumInboxTypeNullableFilterSchema;
