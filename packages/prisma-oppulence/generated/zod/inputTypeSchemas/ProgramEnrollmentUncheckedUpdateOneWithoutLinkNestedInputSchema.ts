import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentCreateWithoutLinkInputSchema } from './ProgramEnrollmentCreateWithoutLinkInputSchema';
import { ProgramEnrollmentUncheckedCreateWithoutLinkInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutLinkInputSchema';
import { ProgramEnrollmentCreateOrConnectWithoutLinkInputSchema } from './ProgramEnrollmentCreateOrConnectWithoutLinkInputSchema';
import { ProgramEnrollmentUpsertWithoutLinkInputSchema } from './ProgramEnrollmentUpsertWithoutLinkInputSchema';
import { ProgramEnrollmentWhereInputSchema } from './ProgramEnrollmentWhereInputSchema';
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema';
import { ProgramEnrollmentUpdateToOneWithWhereWithoutLinkInputSchema } from './ProgramEnrollmentUpdateToOneWithWhereWithoutLinkInputSchema';
import { ProgramEnrollmentUpdateWithoutLinkInputSchema } from './ProgramEnrollmentUpdateWithoutLinkInputSchema';
import { ProgramEnrollmentUncheckedUpdateWithoutLinkInputSchema } from './ProgramEnrollmentUncheckedUpdateWithoutLinkInputSchema';

export const ProgramEnrollmentUncheckedUpdateOneWithoutLinkNestedInputSchema: z.ZodType<Prisma.ProgramEnrollmentUncheckedUpdateOneWithoutLinkNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramEnrollmentCreateWithoutLinkInputSchema),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutLinkInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutLinkInputSchema).optional(),
  upsert: z.lazy(() => ProgramEnrollmentUpsertWithoutLinkInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProgramEnrollmentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProgramEnrollmentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProgramEnrollmentUpdateToOneWithWhereWithoutLinkInputSchema),z.lazy(() => ProgramEnrollmentUpdateWithoutLinkInputSchema),z.lazy(() => ProgramEnrollmentUncheckedUpdateWithoutLinkInputSchema) ]).optional(),
}).strict();

export default ProgramEnrollmentUncheckedUpdateOneWithoutLinkNestedInputSchema;
