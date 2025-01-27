import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramInviteWhereUniqueInputSchema } from './ProgramInviteWhereUniqueInputSchema';
import { ProgramInviteUpdateWithoutProgramInputSchema } from './ProgramInviteUpdateWithoutProgramInputSchema';
import { ProgramInviteUncheckedUpdateWithoutProgramInputSchema } from './ProgramInviteUncheckedUpdateWithoutProgramInputSchema';
import { ProgramInviteCreateWithoutProgramInputSchema } from './ProgramInviteCreateWithoutProgramInputSchema';
import { ProgramInviteUncheckedCreateWithoutProgramInputSchema } from './ProgramInviteUncheckedCreateWithoutProgramInputSchema';

export const ProgramInviteUpsertWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.ProgramInviteUpsertWithWhereUniqueWithoutProgramInput> = z.object({
  where: z.lazy(() => ProgramInviteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProgramInviteUpdateWithoutProgramInputSchema),z.lazy(() => ProgramInviteUncheckedUpdateWithoutProgramInputSchema) ]),
  create: z.union([ z.lazy(() => ProgramInviteCreateWithoutProgramInputSchema),z.lazy(() => ProgramInviteUncheckedCreateWithoutProgramInputSchema) ]),
}).strict();

export default ProgramInviteUpsertWithWhereUniqueWithoutProgramInputSchema;
