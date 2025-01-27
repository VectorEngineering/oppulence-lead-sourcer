import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema';
import { ProgramApplicationUpdateWithoutProgramInputSchema } from './ProgramApplicationUpdateWithoutProgramInputSchema';
import { ProgramApplicationUncheckedUpdateWithoutProgramInputSchema } from './ProgramApplicationUncheckedUpdateWithoutProgramInputSchema';
import { ProgramApplicationCreateWithoutProgramInputSchema } from './ProgramApplicationCreateWithoutProgramInputSchema';
import { ProgramApplicationUncheckedCreateWithoutProgramInputSchema } from './ProgramApplicationUncheckedCreateWithoutProgramInputSchema';

export const ProgramApplicationUpsertWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.ProgramApplicationUpsertWithWhereUniqueWithoutProgramInput> = z.object({
  where: z.lazy(() => ProgramApplicationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProgramApplicationUpdateWithoutProgramInputSchema),z.lazy(() => ProgramApplicationUncheckedUpdateWithoutProgramInputSchema) ]),
  create: z.union([ z.lazy(() => ProgramApplicationCreateWithoutProgramInputSchema),z.lazy(() => ProgramApplicationUncheckedCreateWithoutProgramInputSchema) ]),
}).strict();

export default ProgramApplicationUpsertWithWhereUniqueWithoutProgramInputSchema;
