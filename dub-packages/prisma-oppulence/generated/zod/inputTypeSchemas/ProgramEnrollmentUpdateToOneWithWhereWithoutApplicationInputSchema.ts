import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentWhereInputSchema } from './ProgramEnrollmentWhereInputSchema';
import { ProgramEnrollmentUpdateWithoutApplicationInputSchema } from './ProgramEnrollmentUpdateWithoutApplicationInputSchema';
import { ProgramEnrollmentUncheckedUpdateWithoutApplicationInputSchema } from './ProgramEnrollmentUncheckedUpdateWithoutApplicationInputSchema';

export const ProgramEnrollmentUpdateToOneWithWhereWithoutApplicationInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpdateToOneWithWhereWithoutApplicationInput> = z.object({
  where: z.lazy(() => ProgramEnrollmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProgramEnrollmentUpdateWithoutApplicationInputSchema),z.lazy(() => ProgramEnrollmentUncheckedUpdateWithoutApplicationInputSchema) ]),
}).strict();

export default ProgramEnrollmentUpdateToOneWithWhereWithoutApplicationInputSchema;
