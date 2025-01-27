import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema';
import { ProgramEnrollmentUpdateWithoutDiscountInputSchema } from './ProgramEnrollmentUpdateWithoutDiscountInputSchema';
import { ProgramEnrollmentUncheckedUpdateWithoutDiscountInputSchema } from './ProgramEnrollmentUncheckedUpdateWithoutDiscountInputSchema';
import { ProgramEnrollmentCreateWithoutDiscountInputSchema } from './ProgramEnrollmentCreateWithoutDiscountInputSchema';
import { ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema';

export const ProgramEnrollmentUpsertWithWhereUniqueWithoutDiscountInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpsertWithWhereUniqueWithoutDiscountInput> = z.object({
  where: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProgramEnrollmentUpdateWithoutDiscountInputSchema),z.lazy(() => ProgramEnrollmentUncheckedUpdateWithoutDiscountInputSchema) ]),
  create: z.union([ z.lazy(() => ProgramEnrollmentCreateWithoutDiscountInputSchema),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema) ]),
}).strict();

export default ProgramEnrollmentUpsertWithWhereUniqueWithoutDiscountInputSchema;
