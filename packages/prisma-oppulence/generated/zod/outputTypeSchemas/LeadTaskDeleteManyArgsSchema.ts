import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTaskWhereInputSchema } from '../inputTypeSchemas/LeadTaskWhereInputSchema'

export const LeadTaskDeleteManyArgsSchema: z.ZodType<Prisma.LeadTaskDeleteManyArgs> = z.object({
  where: LeadTaskWhereInputSchema.optional(),
}).strict() ;

export default LeadTaskDeleteManyArgsSchema;
