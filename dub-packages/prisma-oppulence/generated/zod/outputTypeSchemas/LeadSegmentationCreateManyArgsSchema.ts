import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSegmentationCreateManyInputSchema } from '../inputTypeSchemas/LeadSegmentationCreateManyInputSchema'

export const LeadSegmentationCreateManyArgsSchema: z.ZodType<Prisma.LeadSegmentationCreateManyArgs> = z.object({
  data: z.union([ LeadSegmentationCreateManyInputSchema,LeadSegmentationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadSegmentationCreateManyArgsSchema;
