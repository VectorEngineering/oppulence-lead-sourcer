import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentCreateManyDiscountInputSchema } from './ProgramEnrollmentCreateManyDiscountInputSchema';

export const ProgramEnrollmentCreateManyDiscountInputEnvelopeSchema: z.ZodType<Prisma.ProgramEnrollmentCreateManyDiscountInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProgramEnrollmentCreateManyDiscountInputSchema),z.lazy(() => ProgramEnrollmentCreateManyDiscountInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProgramEnrollmentCreateManyDiscountInputEnvelopeSchema;
