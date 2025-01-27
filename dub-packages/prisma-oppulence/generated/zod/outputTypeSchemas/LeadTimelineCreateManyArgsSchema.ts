import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTimelineCreateManyInputSchema } from '../inputTypeSchemas/LeadTimelineCreateManyInputSchema'

export const LeadTimelineCreateManyArgsSchema: z.ZodType<Prisma.LeadTimelineCreateManyArgs> = z.object({
  data: z.union([ LeadTimelineCreateManyInputSchema,LeadTimelineCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadTimelineCreateManyArgsSchema;
