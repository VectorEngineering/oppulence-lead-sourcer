import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { jackson_indexUpdateManyMutationInputSchema } from '../inputTypeSchemas/jackson_indexUpdateManyMutationInputSchema'
import { jackson_indexUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/jackson_indexUncheckedUpdateManyInputSchema'
import { jackson_indexWhereInputSchema } from '../inputTypeSchemas/jackson_indexWhereInputSchema'

export const jackson_indexUpdateManyArgsSchema: z.ZodType<Prisma.jackson_indexUpdateManyArgs> = z.object({
  data: z.union([ jackson_indexUpdateManyMutationInputSchema,jackson_indexUncheckedUpdateManyInputSchema ]),
  where: jackson_indexWhereInputSchema.optional(),
}).strict() ;

export default jackson_indexUpdateManyArgsSchema;
