import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentCreateWithoutApplicationInputSchema } from './ProgramEnrollmentCreateWithoutApplicationInputSchema';
import { ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema';
import { ProgramEnrollmentCreateOrConnectWithoutApplicationInputSchema } from './ProgramEnrollmentCreateOrConnectWithoutApplicationInputSchema';
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema';

export const ProgramEnrollmentCreateNestedOneWithoutApplicationInputSchema: z.ZodType<Prisma.ProgramEnrollmentCreateNestedOneWithoutApplicationInput> = z.object({
  create: z.union([ z.lazy(() => ProgramEnrollmentCreateWithoutApplicationInputSchema),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutApplicationInputSchema).optional(),
  connect: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).optional()
}).strict();

export default ProgramEnrollmentCreateNestedOneWithoutApplicationInputSchema;
