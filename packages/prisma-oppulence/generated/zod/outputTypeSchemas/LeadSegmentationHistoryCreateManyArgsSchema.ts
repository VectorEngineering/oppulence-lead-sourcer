import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSegmentationHistoryCreateManyInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryCreateManyInputSchema'

export const LeadSegmentationHistoryCreateManyArgsSchema: z.ZodType<Prisma.LeadSegmentationHistoryCreateManyArgs> = z.object({
  data: z.union([ LeadSegmentationHistoryCreateManyInputSchema,LeadSegmentationHistoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadSegmentationHistoryCreateManyArgsSchema;
