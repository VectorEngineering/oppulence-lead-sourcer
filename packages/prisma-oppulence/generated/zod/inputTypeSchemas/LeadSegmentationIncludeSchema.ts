import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
import { LeadSegmentationHistoryFindManyArgsSchema } from "../outputTypeSchemas/LeadSegmentationHistoryFindManyArgsSchema"
import { LeadSegmentationCountOutputTypeArgsSchema } from "../outputTypeSchemas/LeadSegmentationCountOutputTypeArgsSchema"

export const LeadSegmentationIncludeSchema: z.ZodType<Prisma.LeadSegmentationInclude> = z.object({
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
  segmentationHistory: z.union([z.boolean(),z.lazy(() => LeadSegmentationHistoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LeadSegmentationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default LeadSegmentationIncludeSchema;
