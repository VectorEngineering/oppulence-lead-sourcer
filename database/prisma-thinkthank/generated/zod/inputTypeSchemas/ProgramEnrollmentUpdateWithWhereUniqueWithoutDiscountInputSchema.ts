import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema';
import { ProgramEnrollmentUpdateWithoutDiscountInputSchema } from './ProgramEnrollmentUpdateWithoutDiscountInputSchema';
import { ProgramEnrollmentUncheckedUpdateWithoutDiscountInputSchema } from './ProgramEnrollmentUncheckedUpdateWithoutDiscountInputSchema';

export const ProgramEnrollmentUpdateWithWhereUniqueWithoutDiscountInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpdateWithWhereUniqueWithoutDiscountInput> = z.object({
  where: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProgramEnrollmentUpdateWithoutDiscountInputSchema),z.lazy(() => ProgramEnrollmentUncheckedUpdateWithoutDiscountInputSchema) ]),
}).strict();

export default ProgramEnrollmentUpdateWithWhereUniqueWithoutDiscountInputSchema;
