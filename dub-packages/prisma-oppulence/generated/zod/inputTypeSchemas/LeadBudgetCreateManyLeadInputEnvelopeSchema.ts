import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadBudgetCreateManyLeadInputSchema } from './LeadBudgetCreateManyLeadInputSchema';

export const LeadBudgetCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadBudgetCreateManyLeadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LeadBudgetCreateManyLeadInputSchema),z.lazy(() => LeadBudgetCreateManyLeadInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LeadBudgetCreateManyLeadInputEnvelopeSchema;
