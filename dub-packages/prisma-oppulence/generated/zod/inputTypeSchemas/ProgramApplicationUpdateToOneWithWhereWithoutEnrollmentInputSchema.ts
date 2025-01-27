import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationWhereInputSchema } from './ProgramApplicationWhereInputSchema';
import { ProgramApplicationUpdateWithoutEnrollmentInputSchema } from './ProgramApplicationUpdateWithoutEnrollmentInputSchema';
import { ProgramApplicationUncheckedUpdateWithoutEnrollmentInputSchema } from './ProgramApplicationUncheckedUpdateWithoutEnrollmentInputSchema';

export const ProgramApplicationUpdateToOneWithWhereWithoutEnrollmentInputSchema: z.ZodType<Prisma.ProgramApplicationUpdateToOneWithWhereWithoutEnrollmentInput> = z.object({
  where: z.lazy(() => ProgramApplicationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProgramApplicationUpdateWithoutEnrollmentInputSchema),z.lazy(() => ProgramApplicationUncheckedUpdateWithoutEnrollmentInputSchema) ]),
}).strict();

export default ProgramApplicationUpdateToOneWithWhereWithoutEnrollmentInputSchema;
