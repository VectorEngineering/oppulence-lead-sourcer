import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProgramUpdateManyMutationInputSchema'
import { ProgramUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProgramUncheckedUpdateManyInputSchema'
import { ProgramWhereInputSchema } from '../inputTypeSchemas/ProgramWhereInputSchema'

export const ProgramUpdateManyArgsSchema: z.ZodType<Prisma.ProgramUpdateManyArgs> = z.object({
  data: z.union([ ProgramUpdateManyMutationInputSchema,ProgramUncheckedUpdateManyInputSchema ]),
  where: ProgramWhereInputSchema.optional(),
}).strict() ;

export default ProgramUpdateManyArgsSchema;
