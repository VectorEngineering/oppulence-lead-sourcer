import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema';
import { ProgramEnrollmentUpdateWithoutProgramInputSchema } from './ProgramEnrollmentUpdateWithoutProgramInputSchema';
import { ProgramEnrollmentUncheckedUpdateWithoutProgramInputSchema } from './ProgramEnrollmentUncheckedUpdateWithoutProgramInputSchema';

export const ProgramEnrollmentUpdateWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpdateWithWhereUniqueWithoutProgramInput> = z.object({
  where: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProgramEnrollmentUpdateWithoutProgramInputSchema),z.lazy(() => ProgramEnrollmentUncheckedUpdateWithoutProgramInputSchema) ]),
}).strict();

export default ProgramEnrollmentUpdateWithWhereUniqueWithoutProgramInputSchema;
