import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxLabelUpdateManyMutationInputSchema } from '../inputTypeSchemas/InboxLabelUpdateManyMutationInputSchema'
import { InboxLabelUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/InboxLabelUncheckedUpdateManyInputSchema'
import { InboxLabelWhereInputSchema } from '../inputTypeSchemas/InboxLabelWhereInputSchema'

export const InboxLabelUpdateManyArgsSchema: z.ZodType<Prisma.InboxLabelUpdateManyArgs> = z.object({
  data: z.union([ InboxLabelUpdateManyMutationInputSchema,InboxLabelUncheckedUpdateManyInputSchema ]),
  where: InboxLabelWhereInputSchema.optional(),
}).strict() ;

export default InboxLabelUpdateManyArgsSchema;
