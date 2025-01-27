import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { jackson_ttlUpdateManyMutationInputSchema } from '../inputTypeSchemas/jackson_ttlUpdateManyMutationInputSchema'
import { jackson_ttlUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/jackson_ttlUncheckedUpdateManyInputSchema'
import { jackson_ttlWhereInputSchema } from '../inputTypeSchemas/jackson_ttlWhereInputSchema'

export const jackson_ttlUpdateManyArgsSchema: z.ZodType<Prisma.jackson_ttlUpdateManyArgs> = z.object({
  data: z.union([ jackson_ttlUpdateManyMutationInputSchema,jackson_ttlUncheckedUpdateManyInputSchema ]),
  where: jackson_ttlWhereInputSchema.optional(),
}).strict() ;

export default jackson_ttlUpdateManyArgsSchema;
