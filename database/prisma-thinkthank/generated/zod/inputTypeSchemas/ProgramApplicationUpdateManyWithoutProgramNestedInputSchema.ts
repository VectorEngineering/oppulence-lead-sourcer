import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationCreateWithoutProgramInputSchema } from './ProgramApplicationCreateWithoutProgramInputSchema';
import { ProgramApplicationUncheckedCreateWithoutProgramInputSchema } from './ProgramApplicationUncheckedCreateWithoutProgramInputSchema';
import { ProgramApplicationCreateOrConnectWithoutProgramInputSchema } from './ProgramApplicationCreateOrConnectWithoutProgramInputSchema';
import { ProgramApplicationUpsertWithWhereUniqueWithoutProgramInputSchema } from './ProgramApplicationUpsertWithWhereUniqueWithoutProgramInputSchema';
import { ProgramApplicationCreateManyProgramInputEnvelopeSchema } from './ProgramApplicationCreateManyProgramInputEnvelopeSchema';
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema';
import { ProgramApplicationUpdateWithWhereUniqueWithoutProgramInputSchema } from './ProgramApplicationUpdateWithWhereUniqueWithoutProgramInputSchema';
import { ProgramApplicationUpdateManyWithWhereWithoutProgramInputSchema } from './ProgramApplicationUpdateManyWithWhereWithoutProgramInputSchema';
import { ProgramApplicationScalarWhereInputSchema } from './ProgramApplicationScalarWhereInputSchema';

export const ProgramApplicationUpdateManyWithoutProgramNestedInputSchema: z.ZodType<Prisma.ProgramApplicationUpdateManyWithoutProgramNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramApplicationCreateWithoutProgramInputSchema),z.lazy(() => ProgramApplicationCreateWithoutProgramInputSchema).array(),z.lazy(() => ProgramApplicationUncheckedCreateWithoutProgramInputSchema),z.lazy(() => ProgramApplicationUncheckedCreateWithoutProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProgramApplicationCreateOrConnectWithoutProgramInputSchema),z.lazy(() => ProgramApplicationCreateOrConnectWithoutProgramInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProgramApplicationUpsertWithWhereUniqueWithoutProgramInputSchema),z.lazy(() => ProgramApplicationUpsertWithWhereUniqueWithoutProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProgramApplicationCreateManyProgramInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProgramApplicationWhereUniqueInputSchema),z.lazy(() => ProgramApplicationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProgramApplicationWhereUniqueInputSchema),z.lazy(() => ProgramApplicationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProgramApplicationWhereUniqueInputSchema),z.lazy(() => ProgramApplicationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProgramApplicationWhereUniqueInputSchema),z.lazy(() => ProgramApplicationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProgramApplicationUpdateWithWhereUniqueWithoutProgramInputSchema),z.lazy(() => ProgramApplicationUpdateWithWhereUniqueWithoutProgramInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProgramApplicationUpdateManyWithWhereWithoutProgramInputSchema),z.lazy(() => ProgramApplicationUpdateManyWithWhereWithoutProgramInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProgramApplicationScalarWhereInputSchema),z.lazy(() => ProgramApplicationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProgramApplicationUpdateManyWithoutProgramNestedInputSchema;
