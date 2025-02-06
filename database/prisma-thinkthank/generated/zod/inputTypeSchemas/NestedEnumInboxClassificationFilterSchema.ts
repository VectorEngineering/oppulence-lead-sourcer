import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxClassificationSchema } from './InboxClassificationSchema';

export const NestedEnumInboxClassificationFilterSchema: z.ZodType<Prisma.NestedEnumInboxClassificationFilter> = z.object({
  equals: z.lazy(() => InboxClassificationSchema).optional(),
  in: z.lazy(() => InboxClassificationSchema).array().optional(),
  notIn: z.lazy(() => InboxClassificationSchema).array().optional(),
  not: z.union([ z.lazy(() => InboxClassificationSchema),z.lazy(() => NestedEnumInboxClassificationFilterSchema) ]).optional(),
}).strict();

export default NestedEnumInboxClassificationFilterSchema;
