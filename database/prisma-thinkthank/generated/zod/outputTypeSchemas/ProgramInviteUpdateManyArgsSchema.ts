import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramInviteUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProgramInviteUpdateManyMutationInputSchema'
import { ProgramInviteUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProgramInviteUncheckedUpdateManyInputSchema'
import { ProgramInviteWhereInputSchema } from '../inputTypeSchemas/ProgramInviteWhereInputSchema'

export const ProgramInviteUpdateManyArgsSchema: z.ZodType<Prisma.ProgramInviteUpdateManyArgs> = z.object({
  data: z.union([ ProgramInviteUpdateManyMutationInputSchema,ProgramInviteUncheckedUpdateManyInputSchema ]),
  where: ProgramInviteWhereInputSchema.optional(),
}).strict() ;

export default ProgramInviteUpdateManyArgsSchema;
