import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentScalarWhereInputSchema } from './ProgramEnrollmentScalarWhereInputSchema';
import { ProgramEnrollmentUpdateManyMutationInputSchema } from './ProgramEnrollmentUpdateManyMutationInputSchema';
import { ProgramEnrollmentUncheckedUpdateManyWithoutDiscountInputSchema } from './ProgramEnrollmentUncheckedUpdateManyWithoutDiscountInputSchema';

export const ProgramEnrollmentUpdateManyWithWhereWithoutDiscountInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpdateManyWithWhereWithoutDiscountInput> = z.object({
  where: z.lazy(() => ProgramEnrollmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProgramEnrollmentUpdateManyMutationInputSchema),z.lazy(() => ProgramEnrollmentUncheckedUpdateManyWithoutDiscountInputSchema) ]),
}).strict();

export default ProgramEnrollmentUpdateManyWithWhereWithoutDiscountInputSchema;
