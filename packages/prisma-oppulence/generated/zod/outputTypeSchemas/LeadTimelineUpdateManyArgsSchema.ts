import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTimelineUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadTimelineUpdateManyMutationInputSchema'
import { LeadTimelineUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadTimelineUncheckedUpdateManyInputSchema'
import { LeadTimelineWhereInputSchema } from '../inputTypeSchemas/LeadTimelineWhereInputSchema'

export const LeadTimelineUpdateManyArgsSchema: z.ZodType<Prisma.LeadTimelineUpdateManyArgs> = z.object({
  data: z.union([ LeadTimelineUpdateManyMutationInputSchema,LeadTimelineUncheckedUpdateManyInputSchema ]),
  where: LeadTimelineWhereInputSchema.optional(),
}).strict() ;

export default LeadTimelineUpdateManyArgsSchema;
