import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationUpdateWithoutEnrollmentInputSchema } from './ProgramApplicationUpdateWithoutEnrollmentInputSchema';
import { ProgramApplicationUncheckedUpdateWithoutEnrollmentInputSchema } from './ProgramApplicationUncheckedUpdateWithoutEnrollmentInputSchema';
import { ProgramApplicationCreateWithoutEnrollmentInputSchema } from './ProgramApplicationCreateWithoutEnrollmentInputSchema';
import { ProgramApplicationUncheckedCreateWithoutEnrollmentInputSchema } from './ProgramApplicationUncheckedCreateWithoutEnrollmentInputSchema';
import { ProgramApplicationWhereInputSchema } from './ProgramApplicationWhereInputSchema';

export const ProgramApplicationUpsertWithoutEnrollmentInputSchema: z.ZodType<Prisma.ProgramApplicationUpsertWithoutEnrollmentInput> = z.object({
  update: z.union([ z.lazy(() => ProgramApplicationUpdateWithoutEnrollmentInputSchema),z.lazy(() => ProgramApplicationUncheckedUpdateWithoutEnrollmentInputSchema) ]),
  create: z.union([ z.lazy(() => ProgramApplicationCreateWithoutEnrollmentInputSchema),z.lazy(() => ProgramApplicationUncheckedCreateWithoutEnrollmentInputSchema) ]),
  where: z.lazy(() => ProgramApplicationWhereInputSchema).optional()
}).strict();

export default ProgramApplicationUpsertWithoutEnrollmentInputSchema;
