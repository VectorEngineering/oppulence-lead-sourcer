import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramTypeSchema } from './ProgramTypeSchema';

export const NestedEnumProgramTypeFilterSchema: z.ZodType<Prisma.NestedEnumProgramTypeFilter> = z.object({
  equals: z.lazy(() => ProgramTypeSchema).optional(),
  in: z.lazy(() => ProgramTypeSchema).array().optional(),
  notIn: z.lazy(() => ProgramTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ProgramTypeSchema),z.lazy(() => NestedEnumProgramTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumProgramTypeFilterSchema;
