import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadBudgetArgsSchema } from "../outputTypeSchemas/LeadBudgetArgsSchema"

export const LeadBudgetRevisionIncludeSchema: z.ZodType<Prisma.LeadBudgetRevisionInclude> = z.object({
  budget: z.union([z.boolean(),z.lazy(() => LeadBudgetArgsSchema)]).optional(),
}).strict()

export default LeadBudgetRevisionIncludeSchema;
