import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxLabelCreateManyInputSchema } from '../inputTypeSchemas/InboxLabelCreateManyInputSchema'

export const InboxLabelCreateManyArgsSchema: z.ZodType<Prisma.InboxLabelCreateManyArgs> = z.object({
  data: z.union([ InboxLabelCreateManyInputSchema,InboxLabelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default InboxLabelCreateManyArgsSchema;
