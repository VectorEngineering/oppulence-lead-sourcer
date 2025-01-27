import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const LeadSegmentationCountOutputTypeSelectSchema: z.ZodType<Prisma.LeadSegmentationCountOutputTypeSelect> = z.object({
  segmentationHistory: z.boolean().optional(),
}).strict();

export default LeadSegmentationCountOutputTypeSelectSchema;
