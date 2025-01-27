import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramInviteScalarWhereInputSchema } from './ProgramInviteScalarWhereInputSchema';
import { ProgramInviteUpdateManyMutationInputSchema } from './ProgramInviteUpdateManyMutationInputSchema';
import { ProgramInviteUncheckedUpdateManyWithoutProgramInputSchema } from './ProgramInviteUncheckedUpdateManyWithoutProgramInputSchema';

export const ProgramInviteUpdateManyWithWhereWithoutProgramInputSchema: z.ZodType<Prisma.ProgramInviteUpdateManyWithWhereWithoutProgramInput> = z.object({
  where: z.lazy(() => ProgramInviteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProgramInviteUpdateManyMutationInputSchema),z.lazy(() => ProgramInviteUncheckedUpdateManyWithoutProgramInputSchema) ]),
}).strict();

export default ProgramInviteUpdateManyWithWhereWithoutProgramInputSchema;
