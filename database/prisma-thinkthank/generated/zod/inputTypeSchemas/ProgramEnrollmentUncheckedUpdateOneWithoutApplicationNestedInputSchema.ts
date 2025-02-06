import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramEnrollmentCreateWithoutApplicationInputSchema } from './ProgramEnrollmentCreateWithoutApplicationInputSchema';
import { ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema } from './ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema';
import { ProgramEnrollmentCreateOrConnectWithoutApplicationInputSchema } from './ProgramEnrollmentCreateOrConnectWithoutApplicationInputSchema';
import { ProgramEnrollmentUpsertWithoutApplicationInputSchema } from './ProgramEnrollmentUpsertWithoutApplicationInputSchema';
import { ProgramEnrollmentWhereInputSchema } from './ProgramEnrollmentWhereInputSchema';
import { ProgramEnrollmentWhereUniqueInputSchema } from './ProgramEnrollmentWhereUniqueInputSchema';
import { ProgramEnrollmentUpdateToOneWithWhereWithoutApplicationInputSchema } from './ProgramEnrollmentUpdateToOneWithWhereWithoutApplicationInputSchema';
import { ProgramEnrollmentUpdateWithoutApplicationInputSchema } from './ProgramEnrollmentUpdateWithoutApplicationInputSchema';
import { ProgramEnrollmentUncheckedUpdateWithoutApplicationInputSchema } from './ProgramEnrollmentUncheckedUpdateWithoutApplicationInputSchema';

export const ProgramEnrollmentUncheckedUpdateOneWithoutApplicationNestedInputSchema: z.ZodType<Prisma.ProgramEnrollmentUncheckedUpdateOneWithoutApplicationNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramEnrollmentCreateWithoutApplicationInputSchema),z.lazy(() => ProgramEnrollmentUncheckedCreateWithoutApplicationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramEnrollmentCreateOrConnectWithoutApplicationInputSchema).optional(),
  upsert: z.lazy(() => ProgramEnrollmentUpsertWithoutApplicationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProgramEnrollmentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProgramEnrollmentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProgramEnrollmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProgramEnrollmentUpdateToOneWithWhereWithoutApplicationInputSchema),z.lazy(() => ProgramEnrollmentUpdateWithoutApplicationInputSchema),z.lazy(() => ProgramEnrollmentUncheckedUpdateWithoutApplicationInputSchema) ]).optional(),
}).strict();

export default ProgramEnrollmentUncheckedUpdateOneWithoutApplicationNestedInputSchema;
