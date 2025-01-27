import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramResourceTypeSchema } from './ProgramResourceTypeSchema';
import { NestedEnumProgramResourceTypeFilterSchema } from './NestedEnumProgramResourceTypeFilterSchema';

export const EnumProgramResourceTypeFilterSchema: z.ZodType<Prisma.EnumProgramResourceTypeFilter> = z.object({
  equals: z.lazy(() => ProgramResourceTypeSchema).optional(),
  in: z.lazy(() => ProgramResourceTypeSchema).array().optional(),
  notIn: z.lazy(() => ProgramResourceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ProgramResourceTypeSchema),z.lazy(() => NestedEnumProgramResourceTypeFilterSchema) ]).optional(),
}).strict();

export default EnumProgramResourceTypeFilterSchema;
