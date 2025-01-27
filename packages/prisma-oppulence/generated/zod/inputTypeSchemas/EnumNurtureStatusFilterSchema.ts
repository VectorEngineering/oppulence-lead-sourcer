import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NurtureStatusSchema } from './NurtureStatusSchema';
import { NestedEnumNurtureStatusFilterSchema } from './NestedEnumNurtureStatusFilterSchema';

export const EnumNurtureStatusFilterSchema: z.ZodType<Prisma.EnumNurtureStatusFilter> = z.object({
  equals: z.lazy(() => NurtureStatusSchema).optional(),
  in: z.lazy(() => NurtureStatusSchema).array().optional(),
  notIn: z.lazy(() => NurtureStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => NurtureStatusSchema),z.lazy(() => NestedEnumNurtureStatusFilterSchema) ]).optional(),
}).strict();

export default EnumNurtureStatusFilterSchema;
