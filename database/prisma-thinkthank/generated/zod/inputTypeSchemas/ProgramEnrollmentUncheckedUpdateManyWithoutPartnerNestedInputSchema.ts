import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentCreateWithoutPartnerInputSchema } from './ProgramEnrollmentCreateWithoutPartnerInputSchema';
import { ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema';
import { ProgramEnrollmentCreateOrConnectWithoutPartnerInputSchema } from './ProgramEnrollmentCreateOrConnectWithoutPartnerInputSchema';
import { ProgramEnrollmentUpsertWithWhereUniqueWithoutPartnerInputSchema } from './ProgramEnrollmentUpsertWithWhereUniqueWithoutPartnerInputSchema';
import { ProgramEnrollmentCreateManyPartnerInputEnvelopeSchema } from './ProgramEnrollmentCreateManyPartnerInputEnvelopeSchema';
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema';
import { ProgramEnrollmentUpdateWithWhereUniqueWithoutPartnerInputSchema } from './ProgramEnrollmentUpdateWithWhereUniqueWithoutPartnerInputSchema';
import { ProgramEnrollmentUpdateManyWithWhereWithoutPartnerInputSchema } from './ProgramEnrollmentUpdateManyWithWhereWithoutPartnerInputSchema';
import { ProgramEnrollmentScalarWhereInputSchema } from './ProgramEnrollmentScalarWhereInputSchema';

export const ProgramEnrollmentUncheckedUpdateManyWithoutPartnerNestedInputSchema: z.ZodType<Prisma.ProgramEnrollmentUncheckedUpdateManyWithoutPartnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramEnrollmentCreateWithoutPartnerInputSchema),z.lazy(() => ProgramEnrollmentCreateWithoutPartnerInputSchema).array(),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutPartnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutPartnerInputSchema),z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutPartnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProgramEnrollmentUpsertWithWhereUniqueWithoutPartnerInputSchema),z.lazy(() => ProgramEnrollmentUpsertWithWhereUniqueWithoutPartnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProgramEnrollmentCreateManyPartnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema),z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProgramEnrollmentUpdateWithWhereUniqueWithoutPartnerInputSchema),z.lazy(() => ProgramEnrollmentUpdateWithWhereUniqueWithoutPartnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProgramEnrollmentUpdateManyWithWhereWithoutPartnerInputSchema),z.lazy(() => ProgramEnrollmentUpdateManyWithWhereWithoutPartnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProgramEnrollmentScalarWhereInputSchema),z.lazy(() => ProgramEnrollmentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProgramEnrollmentUncheckedUpdateManyWithoutPartnerNestedInputSchema;
