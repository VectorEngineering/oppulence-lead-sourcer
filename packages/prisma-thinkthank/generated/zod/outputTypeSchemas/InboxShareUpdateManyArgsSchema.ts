import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxShareUpdateManyMutationInputSchema } from '../inputTypeSchemas/InboxShareUpdateManyMutationInputSchema'
import { InboxShareUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/InboxShareUncheckedUpdateManyInputSchema'
import { InboxShareWhereInputSchema } from '../inputTypeSchemas/InboxShareWhereInputSchema'

export const InboxShareUpdateManyArgsSchema: z.ZodType<Prisma.InboxShareUpdateManyArgs> = z.object({
  data: z.union([ InboxShareUpdateManyMutationInputSchema,InboxShareUncheckedUpdateManyInputSchema ]),
  where: InboxShareWhereInputSchema.optional(),
}).strict() ;

export default InboxShareUpdateManyArgsSchema;
