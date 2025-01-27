import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationCreateWithoutEnrollmentInputSchema } from './ProgramApplicationCreateWithoutEnrollmentInputSchema';
import { ProgramApplicationUncheckedCreateWithoutEnrollmentInputSchema } from './ProgramApplicationUncheckedCreateWithoutEnrollmentInputSchema';
import { ProgramApplicationCreateOrConnectWithoutEnrollmentInputSchema } from './ProgramApplicationCreateOrConnectWithoutEnrollmentInputSchema';
import { ProgramApplicationUpsertWithoutEnrollmentInputSchema } from './ProgramApplicationUpsertWithoutEnrollmentInputSchema';
import { ProgramApplicationWhereInputSchema } from './ProgramApplicationWhereInputSchema';
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema';
import { ProgramApplicationUpdateToOneWithWhereWithoutEnrollmentInputSchema } from './ProgramApplicationUpdateToOneWithWhereWithoutEnrollmentInputSchema';
import { ProgramApplicationUpdateWithoutEnrollmentInputSchema } from './ProgramApplicationUpdateWithoutEnrollmentInputSchema';
import { ProgramApplicationUncheckedUpdateWithoutEnrollmentInputSchema } from './ProgramApplicationUncheckedUpdateWithoutEnrollmentInputSchema';

export const ProgramApplicationUpdateOneWithoutEnrollmentNestedInputSchema: z.ZodType<Prisma.ProgramApplicationUpdateOneWithoutEnrollmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramApplicationCreateWithoutEnrollmentInputSchema),z.lazy(() => ProgramApplicationUncheckedCreateWithoutEnrollmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramApplicationCreateOrConnectWithoutEnrollmentInputSchema).optional(),
  upsert: z.lazy(() => ProgramApplicationUpsertWithoutEnrollmentInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProgramApplicationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProgramApplicationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProgramApplicationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProgramApplicationUpdateToOneWithWhereWithoutEnrollmentInputSchema),z.lazy(() => ProgramApplicationUpdateWithoutEnrollmentInputSchema),z.lazy(() => ProgramApplicationUncheckedUpdateWithoutEnrollmentInputSchema) ]).optional(),
}).strict();

export default ProgramApplicationUpdateOneWithoutEnrollmentNestedInputSchema;
