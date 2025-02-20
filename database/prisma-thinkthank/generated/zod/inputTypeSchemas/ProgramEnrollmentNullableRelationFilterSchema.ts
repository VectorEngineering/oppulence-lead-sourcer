import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentWhereInputSchema } from './ProgramEnrollmentWhereInputSchema';

export const ProgramEnrollmentNullableRelationFilterSchema: z.ZodType<Prisma.ProgramEnrollmentNullableRelationFilter> = z.object({
  is: z.lazy(() => ProgramEnrollmentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ProgramEnrollmentWhereInputSchema).optional().nullable()
}).strict();

export default ProgramEnrollmentNullableRelationFilterSchema;
