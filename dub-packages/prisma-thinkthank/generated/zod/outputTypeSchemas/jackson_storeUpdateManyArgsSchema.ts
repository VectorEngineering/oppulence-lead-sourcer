import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { jackson_storeUpdateManyMutationInputSchema } from '../inputTypeSchemas/jackson_storeUpdateManyMutationInputSchema'
import { jackson_storeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/jackson_storeUncheckedUpdateManyInputSchema'
import { jackson_storeWhereInputSchema } from '../inputTypeSchemas/jackson_storeWhereInputSchema'

export const jackson_storeUpdateManyArgsSchema: z.ZodType<Prisma.jackson_storeUpdateManyArgs> = z.object({
  data: z.union([ jackson_storeUpdateManyMutationInputSchema,jackson_storeUncheckedUpdateManyInputSchema ]),
  where: jackson_storeWhereInputSchema.optional(),
}).strict() ;

export default jackson_storeUpdateManyArgsSchema;
