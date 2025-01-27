import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentWhereInputSchema } from './ProgramEnrollmentWhereInputSchema';
import { ProgramEnrollmentUpdateWithoutLinkInputSchema } from './ProgramEnrollmentUpdateWithoutLinkInputSchema';
import { ProgramEnrollmentUncheckedUpdateWithoutLinkInputSchema } from './ProgramEnrollmentUncheckedUpdateWithoutLinkInputSchema';

export const ProgramEnrollmentUpdateToOneWithWhereWithoutLinkInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpdateToOneWithWhereWithoutLinkInput> = z.object({
  where: z.lazy(() => ProgramEnrollmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProgramEnrollmentUpdateWithoutLinkInputSchema),z.lazy(() => ProgramEnrollmentUncheckedUpdateWithoutLinkInputSchema) ]),
}).strict();

export default ProgramEnrollmentUpdateToOneWithWhereWithoutLinkInputSchema;
