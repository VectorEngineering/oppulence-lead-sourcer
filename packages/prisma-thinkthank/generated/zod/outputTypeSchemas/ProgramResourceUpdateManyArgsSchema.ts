import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramResourceUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProgramResourceUpdateManyMutationInputSchema'
import { ProgramResourceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProgramResourceUncheckedUpdateManyInputSchema'
import { ProgramResourceWhereInputSchema } from '../inputTypeSchemas/ProgramResourceWhereInputSchema'

export const ProgramResourceUpdateManyArgsSchema: z.ZodType<Prisma.ProgramResourceUpdateManyArgs> = z.object({
  data: z.union([ ProgramResourceUpdateManyMutationInputSchema,ProgramResourceUncheckedUpdateManyInputSchema ]),
  where: ProgramResourceWhereInputSchema.optional(),
}).strict() ;

export default ProgramResourceUpdateManyArgsSchema;
