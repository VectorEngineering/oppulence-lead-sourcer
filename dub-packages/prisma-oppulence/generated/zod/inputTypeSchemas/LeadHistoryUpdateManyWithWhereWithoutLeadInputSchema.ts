import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadHistoryScalarWhereInputSchema } from './LeadHistoryScalarWhereInputSchema';
import { LeadHistoryUpdateManyMutationInputSchema } from './LeadHistoryUpdateManyMutationInputSchema';
import { LeadHistoryUncheckedUpdateManyWithoutLeadInputSchema } from './LeadHistoryUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadHistoryUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadHistoryUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadHistoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadHistoryUpdateManyMutationInputSchema),z.lazy(() => LeadHistoryUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadHistoryUpdateManyWithWhereWithoutLeadInputSchema;
