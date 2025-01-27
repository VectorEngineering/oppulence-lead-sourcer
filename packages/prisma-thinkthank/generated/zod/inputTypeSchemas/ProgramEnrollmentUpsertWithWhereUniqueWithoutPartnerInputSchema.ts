import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema';
import { ProgramEnrollmentUpdateWithoutPartnerInputSchema } from './ProgramEnrollmentUpdateWithoutPartnerInputSchema';
import { ProgramEnrollmentUncheckedUpdateWithoutPartnerInputSchema } from './ProgramEnrollmentUncheckedUpdateWithoutPartnerInputSchema';
import { ProgramEnrollmentCreateWithoutPartnerInputSchema } from './ProgramEnrollmentCreateWithoutPartnerInputSchema';
import { ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema';

export const ProgramEnrollmentUpsertWithWhereUniqueWithoutPartnerInputSchema: z.ZodType<Prisma.ProgramEnrollmentUpsertWithWhereUniqueWithoutPartnerInput> = z.object({
  where: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProgramEnrollmentUpdateWithoutPartnerInputSchema),z.lazy(() => ProgramEnrollmentUncheckedUpdateWithoutPartnerInputSchema) ]),
  create: z.union([ z.lazy(() => ProgramEnrollmentCreateWithoutPartnerInputSchema),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema) ]),
}).strict();

export default ProgramEnrollmentUpsertWithWhereUniqueWithoutPartnerInputSchema;
