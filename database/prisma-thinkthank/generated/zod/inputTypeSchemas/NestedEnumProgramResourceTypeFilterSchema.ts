import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramResourceTypeSchema } from './ProgramResourceTypeSchema';

export const NestedEnumProgramResourceTypeFilterSchema: z.ZodType<Prisma.NestedEnumProgramResourceTypeFilter> = z.object({
  equals: z.lazy(() => ProgramResourceTypeSchema).optional(),
  in: z.lazy(() => ProgramResourceTypeSchema).array().optional(),
  notIn: z.lazy(() => ProgramResourceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ProgramResourceTypeSchema),z.lazy(() => NestedEnumProgramResourceTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumProgramResourceTypeFilterSchema;
