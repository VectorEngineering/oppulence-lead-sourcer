import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentWhereInputSchema } from './ProgramEnrollmentWhereInputSchema';

export const ProgramEnrollmentListRelationFilterSchema: z.ZodType<Prisma.ProgramEnrollmentListRelationFilter> = z.object({
  every: z.lazy(() => ProgramEnrollmentWhereInputSchema).optional(),
  some: z.lazy(() => ProgramEnrollmentWhereInputSchema).optional(),
  none: z.lazy(() => ProgramEnrollmentWhereInputSchema).optional()
}).strict();

export default ProgramEnrollmentListRelationFilterSchema;
