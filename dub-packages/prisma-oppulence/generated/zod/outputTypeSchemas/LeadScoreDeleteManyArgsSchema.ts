import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadScoreWhereInputSchema } from '../inputTypeSchemas/LeadScoreWhereInputSchema'

export const LeadScoreDeleteManyArgsSchema: z.ZodType<Prisma.LeadScoreDeleteManyArgs> = z.object({
  where: LeadScoreWhereInputSchema.optional(),
}).strict() ;

export default LeadScoreDeleteManyArgsSchema;
