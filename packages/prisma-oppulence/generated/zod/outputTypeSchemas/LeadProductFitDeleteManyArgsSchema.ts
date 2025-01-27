import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadProductFitWhereInputSchema } from '../inputTypeSchemas/LeadProductFitWhereInputSchema'

export const LeadProductFitDeleteManyArgsSchema: z.ZodType<Prisma.LeadProductFitDeleteManyArgs> = z.object({
  where: LeadProductFitWhereInputSchema.optional(),
}).strict() ;

export default LeadProductFitDeleteManyArgsSchema;
