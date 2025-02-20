import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramResourceWhereUniqueInputSchema } from './ProgramResourceWhereUniqueInputSchema';
import { ProgramResourceUpdateWithoutProgramInputSchema } from './ProgramResourceUpdateWithoutProgramInputSchema';
import { ProgramResourceUncheckedUpdateWithoutProgramInputSchema } from './ProgramResourceUncheckedUpdateWithoutProgramInputSchema';
import { ProgramResourceCreateWithoutProgramInputSchema } from './ProgramResourceCreateWithoutProgramInputSchema';
import { ProgramResourceUncheckedCreateWithoutProgramInputSchema } from './ProgramResourceUncheckedCreateWithoutProgramInputSchema';

export const ProgramResourceUpsertWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.ProgramResourceUpsertWithWhereUniqueWithoutProgramInput> = z.object({
  where: z.lazy(() => ProgramResourceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProgramResourceUpdateWithoutProgramInputSchema),z.lazy(() => ProgramResourceUncheckedUpdateWithoutProgramInputSchema) ]),
  create: z.union([ z.lazy(() => ProgramResourceCreateWithoutProgramInputSchema),z.lazy(() => ProgramResourceUncheckedCreateWithoutProgramInputSchema) ]),
}).strict();

export default ProgramResourceUpsertWithWhereUniqueWithoutProgramInputSchema;
