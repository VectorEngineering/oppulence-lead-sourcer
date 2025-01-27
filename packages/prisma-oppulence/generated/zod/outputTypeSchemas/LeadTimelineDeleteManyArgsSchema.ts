import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTimelineWhereInputSchema } from '../inputTypeSchemas/LeadTimelineWhereInputSchema'

export const LeadTimelineDeleteManyArgsSchema: z.ZodType<Prisma.LeadTimelineDeleteManyArgs> = z.object({
  where: LeadTimelineWhereInputSchema.optional(),
}).strict() ;

export default LeadTimelineDeleteManyArgsSchema;
