import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxWhereInputSchema } from '../inputTypeSchemas/InboxWhereInputSchema'

export const InboxDeleteManyArgsSchema: z.ZodType<Prisma.InboxDeleteManyArgs> = z.object({
  where: InboxWhereInputSchema.optional(),
}).strict() ;

export default InboxDeleteManyArgsSchema;
