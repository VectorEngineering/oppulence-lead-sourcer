import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramResourceWhereUniqueInputSchema } from './ProgramResourceWhereUniqueInputSchema';
import { ProgramResourceCreateWithoutProgramInputSchema } from './ProgramResourceCreateWithoutProgramInputSchema';
import { ProgramResourceUncheckedCreateWithoutProgramInputSchema } from './ProgramResourceUncheckedCreateWithoutProgramInputSchema';

export const ProgramResourceCreateOrConnectWithoutProgramInputSchema: z.ZodType<Prisma.ProgramResourceCreateOrConnectWithoutProgramInput> = z.object({
  where: z.lazy(() => ProgramResourceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProgramResourceCreateWithoutProgramInputSchema),z.lazy(() => ProgramResourceUncheckedCreateWithoutProgramInputSchema) ]),
}).strict();

export default ProgramResourceCreateOrConnectWithoutProgramInputSchema;
