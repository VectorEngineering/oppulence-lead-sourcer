import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
import { LeadProductFitAssessmentFindManyArgsSchema } from "../outputTypeSchemas/LeadProductFitAssessmentFindManyArgsSchema"
import { LeadProductFitCountOutputTypeArgsSchema } from "../outputTypeSchemas/LeadProductFitCountOutputTypeArgsSchema"

export const LeadProductFitIncludeSchema: z.ZodType<Prisma.LeadProductFitInclude> = z.object({
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
  assessments: z.union([z.boolean(),z.lazy(() => LeadProductFitAssessmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LeadProductFitCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default LeadProductFitIncludeSchema;
