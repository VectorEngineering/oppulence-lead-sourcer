import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentStatusSchema } from './ProgramEnrollmentStatusSchema';

export const NestedEnumProgramEnrollmentStatusFilterSchema: z.ZodType<Prisma.NestedEnumProgramEnrollmentStatusFilter> = z.object({
  equals: z.lazy(() => ProgramEnrollmentStatusSchema).optional(),
  in: z.lazy(() => ProgramEnrollmentStatusSchema).array().optional(),
  notIn: z.lazy(() => ProgramEnrollmentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ProgramEnrollmentStatusSchema),z.lazy(() => NestedEnumProgramEnrollmentStatusFilterSchema) ]).optional(),
}).strict();

export default NestedEnumProgramEnrollmentStatusFilterSchema;
