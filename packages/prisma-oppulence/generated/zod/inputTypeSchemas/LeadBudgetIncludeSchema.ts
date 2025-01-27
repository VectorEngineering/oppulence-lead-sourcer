import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
import { LeadBudgetRevisionFindManyArgsSchema } from "../outputTypeSchemas/LeadBudgetRevisionFindManyArgsSchema"
import { LeadBudgetExpenseFindManyArgsSchema } from "../outputTypeSchemas/LeadBudgetExpenseFindManyArgsSchema"
import { LeadBudgetCountOutputTypeArgsSchema } from "../outputTypeSchemas/LeadBudgetCountOutputTypeArgsSchema"

export const LeadBudgetIncludeSchema: z.ZodType<Prisma.LeadBudgetInclude> = z.object({
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
  revisions: z.union([z.boolean(),z.lazy(() => LeadBudgetRevisionFindManyArgsSchema)]).optional(),
  expenses: z.union([z.boolean(),z.lazy(() => LeadBudgetExpenseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LeadBudgetCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default LeadBudgetIncludeSchema;
