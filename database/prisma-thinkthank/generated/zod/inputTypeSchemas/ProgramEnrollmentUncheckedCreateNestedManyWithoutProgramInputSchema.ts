import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentCreateWithoutProgramInputSchema } from './ProgramEnrollmentCreateWithoutProgramInputSchema';
import { ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema';
import { ProgramEnrollmentCreateOrConnectWithoutProgramInputSchema } from './ProgramEnrollmentCreateOrConnectWithoutProgramInputSchema';
import { ProgramEnrollmentCreateManyProgramInputEnvelopeSchema } from './ProgramEnrollmentCreateManyProgramInputEnvelopeSchema';
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema';

export const ProgramEnrollmentUncheckedCreateNestedManyWithoutProgramInputSchema: z.ZodType<Prisma.ProgramEnrollmentUncheckedCreateNestedManyWithoutProgramInput> = z.object({
  create: z.union([ z.lazy(() => ProgramEnrollmentCreateWithoutProgramInputSchema),z.lazy(() => ProgramEnrollmentCreateWithoutProgramInputSchema).array(),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutProgramInputSchema),z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProgramEnrollmentCreateManyProgramInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProgramEnrollmentUncheckedCreateNestedManyWithoutProgramInputSchema;
