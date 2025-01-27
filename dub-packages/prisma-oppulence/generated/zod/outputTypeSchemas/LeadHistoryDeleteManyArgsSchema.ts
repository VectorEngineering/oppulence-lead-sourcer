import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadHistoryWhereInputSchema } from '../inputTypeSchemas/LeadHistoryWhereInputSchema'

export const LeadHistoryDeleteManyArgsSchema: z.ZodType<Prisma.LeadHistoryDeleteManyArgs> = z.object({
  where: LeadHistoryWhereInputSchema.optional(),
}).strict() ;

export default LeadHistoryDeleteManyArgsSchema;
