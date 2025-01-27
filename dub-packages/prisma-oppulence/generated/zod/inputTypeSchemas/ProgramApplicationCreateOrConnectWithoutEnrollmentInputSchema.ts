import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema';
import { ProgramApplicationCreateWithoutEnrollmentInputSchema } from './ProgramApplicationCreateWithoutEnrollmentInputSchema';
import { ProgramApplicationUncheckedCreateWithoutEnrollmentInputSchema } from './ProgramApplicationUncheckedCreateWithoutEnrollmentInputSchema';

export const ProgramApplicationCreateOrConnectWithoutEnrollmentInputSchema: z.ZodType<Prisma.ProgramApplicationCreateOrConnectWithoutEnrollmentInput> = z.object({
  where: z.lazy(() => ProgramApplicationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProgramApplicationCreateWithoutEnrollmentInputSchema),z.lazy(() => ProgramApplicationUncheckedCreateWithoutEnrollmentInputSchema) ]),
}).strict();

export default ProgramApplicationCreateOrConnectWithoutEnrollmentInputSchema;
