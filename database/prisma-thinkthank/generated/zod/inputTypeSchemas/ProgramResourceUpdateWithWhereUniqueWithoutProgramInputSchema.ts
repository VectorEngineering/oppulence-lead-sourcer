import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramResourceWhereUniqueInputSchema } from './ProgramResourceWhereUniqueInputSchema';
import { ProgramResourceUpdateWithoutProgramInputSchema } from './ProgramResourceUpdateWithoutProgramInputSchema';
import { ProgramResourceUncheckedUpdateWithoutProgramInputSchema } from './ProgramResourceUncheckedUpdateWithoutProgramInputSchema';

export const ProgramResourceUpdateWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.ProgramResourceUpdateWithWhereUniqueWithoutProgramInput> = z.object({
  where: z.lazy(() => ProgramResourceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProgramResourceUpdateWithoutProgramInputSchema),z.lazy(() => ProgramResourceUncheckedUpdateWithoutProgramInputSchema) ]),
}).strict();

export default ProgramResourceUpdateWithWhereUniqueWithoutProgramInputSchema;
