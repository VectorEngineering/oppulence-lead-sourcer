import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentCreateWithoutPartnerInputSchema } from './ProgramEnrollmentCreateWithoutPartnerInputSchema';
import { ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema';
import { ProgramEnrollmentCreateOrConnectWithoutPartnerInputSchema } from './ProgramEnrollmentCreateOrConnectWithoutPartnerInputSchema';
import { ProgramEnrollmentCreateManyPartnerInputEnvelopeSchema } from './ProgramEnrollmentCreateManyPartnerInputEnvelopeSchema';
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema';

export const ProgramEnrollmentCreateNestedManyWithoutPartnerInputSchema: z.ZodType<Prisma.ProgramEnrollmentCreateNestedManyWithoutPartnerInput> = z.object({
  create: z.union([ z.lazy(() => ProgramEnrollmentCreateWithoutPartnerInputSchema),z.lazy(() => ProgramEnrollmentCreateWithoutPartnerInputSchema).array(),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutPartnerInputSchema),z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutPartnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProgramEnrollmentCreateManyPartnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProgramEnrollmentCreateNestedManyWithoutPartnerInputSchema;
