import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramResourceTypeSchema } from './ProgramResourceTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumProgramResourceTypeFilterSchema } from './NestedEnumProgramResourceTypeFilterSchema';

export const NestedEnumProgramResourceTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumProgramResourceTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ProgramResourceTypeSchema).optional(),
  in: z.lazy(() => ProgramResourceTypeSchema).array().optional(),
  notIn: z.lazy(() => ProgramResourceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ProgramResourceTypeSchema),z.lazy(() => NestedEnumProgramResourceTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumProgramResourceTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumProgramResourceTypeFilterSchema).optional()
}).strict();

export default NestedEnumProgramResourceTypeWithAggregatesFilterSchema;
