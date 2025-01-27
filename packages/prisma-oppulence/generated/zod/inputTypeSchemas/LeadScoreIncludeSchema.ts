import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
import { LeadScoreHistoryFindManyArgsSchema } from "../outputTypeSchemas/LeadScoreHistoryFindManyArgsSchema"
import { LeadScoreCountOutputTypeArgsSchema } from "../outputTypeSchemas/LeadScoreCountOutputTypeArgsSchema"

export const LeadScoreIncludeSchema: z.ZodType<Prisma.LeadScoreInclude> = z.object({
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
  scoreHistory: z.union([z.boolean(),z.lazy(() => LeadScoreHistoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LeadScoreCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default LeadScoreIncludeSchema;
