import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationCreateWithoutProgramInputSchema } from './ProgramApplicationCreateWithoutProgramInputSchema';
import { ProgramApplicationUncheckedCreateWithoutProgramInputSchema } from './ProgramApplicationUncheckedCreateWithoutProgramInputSchema';
import { ProgramApplicationCreateOrConnectWithoutProgramInputSchema } from './ProgramApplicationCreateOrConnectWithoutProgramInputSchema';
import { ProgramApplicationCreateManyProgramInputEnvelopeSchema } from './ProgramApplicationCreateManyProgramInputEnvelopeSchema';
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema';

export const ProgramApplicationUncheckedCreateNestedManyWithoutProgramInputSchema: z.ZodType<Prisma.ProgramApplicationUncheckedCreateNestedManyWithoutProgramInput> = z.object({
  create: z.union([ z.lazy(() => ProgramApplicationCreateWithoutProgramInputSchema),z.lazy(() => ProgramApplicationCreateWithoutProgramInputSchema).array(),z.lazy(() => ProgramApplicationUncheckedCreateWithoutProgramInputSchema),z.lazy(() => ProgramApplicationUncheckedCreateWithoutProgramInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProgramApplicationCreateOrConnectWithoutProgramInputSchema),z.lazy(() => ProgramApplicationCreateOrConnectWithoutProgramInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProgramApplicationCreateManyProgramInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProgramApplicationWhereUniqueInputSchema),z.lazy(() => ProgramApplicationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProgramApplicationUncheckedCreateNestedManyWithoutProgramInputSchema;
