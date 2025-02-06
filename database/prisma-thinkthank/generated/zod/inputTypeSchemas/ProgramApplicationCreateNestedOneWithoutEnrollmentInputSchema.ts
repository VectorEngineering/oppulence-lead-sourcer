import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationCreateWithoutEnrollmentInputSchema } from './ProgramApplicationCreateWithoutEnrollmentInputSchema';
import { ProgramApplicationUncheckedCreateWithoutEnrollmentInputSchema } from './ProgramApplicationUncheckedCreateWithoutEnrollmentInputSchema';
import { ProgramApplicationCreateOrConnectWithoutEnrollmentInputSchema } from './ProgramApplicationCreateOrConnectWithoutEnrollmentInputSchema';
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema';

export const ProgramApplicationCreateNestedOneWithoutEnrollmentInputSchema: z.ZodType<Prisma.ProgramApplicationCreateNestedOneWithoutEnrollmentInput> = z.object({
  create: z.union([ z.lazy(() => ProgramApplicationCreateWithoutEnrollmentInputSchema),z.lazy(() => ProgramApplicationUncheckedCreateWithoutEnrollmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramApplicationCreateOrConnectWithoutEnrollmentInputSchema).optional(),
  connect: z.lazy(() => ProgramApplicationWhereUniqueInputSchema).optional()
}).strict();

export default ProgramApplicationCreateNestedOneWithoutEnrollmentInputSchema;
