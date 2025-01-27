import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentCreateWithoutDiscountInputSchema } from './ProgramEnrollmentCreateWithoutDiscountInputSchema';
import { ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema';
import { ProgramEnrollmentCreateOrConnectWithoutDiscountInputSchema } from './ProgramEnrollmentCreateOrConnectWithoutDiscountInputSchema';
import { ProgramEnrollmentCreateManyDiscountInputEnvelopeSchema } from './ProgramEnrollmentCreateManyDiscountInputEnvelopeSchema';
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema';

export const ProgramEnrollmentUncheckedCreateNestedManyWithoutDiscountInputSchema: z.ZodType<Prisma.ProgramEnrollmentUncheckedCreateNestedManyWithoutDiscountInput> = z.object({
  create: z.union([ z.lazy(() => ProgramEnrollmentCreateWithoutDiscountInputSchema),z.lazy(() => ProgramEnrollmentCreateWithoutDiscountInputSchema).array(),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutDiscountInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutDiscountInputSchema),z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutDiscountInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProgramEnrollmentCreateManyDiscountInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProgramEnrollmentUncheckedCreateNestedManyWithoutDiscountInputSchema;
