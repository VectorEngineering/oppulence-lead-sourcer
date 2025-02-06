import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SentEmailUpdateManyMutationInputSchema } from '../inputTypeSchemas/SentEmailUpdateManyMutationInputSchema'
import { SentEmailUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SentEmailUncheckedUpdateManyInputSchema'
import { SentEmailWhereInputSchema } from '../inputTypeSchemas/SentEmailWhereInputSchema'

export const SentEmailUpdateManyArgsSchema: z.ZodType<Prisma.SentEmailUpdateManyArgs> = z.object({
  data: z.union([ SentEmailUpdateManyMutationInputSchema,SentEmailUncheckedUpdateManyInputSchema ]),
  where: SentEmailWhereInputSchema.optional(),
}).strict() ;

export default SentEmailUpdateManyArgsSchema;
