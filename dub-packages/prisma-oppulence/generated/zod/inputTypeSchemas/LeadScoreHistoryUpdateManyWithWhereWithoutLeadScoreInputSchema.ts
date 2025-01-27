import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreHistoryScalarWhereInputSchema } from './LeadScoreHistoryScalarWhereInputSchema';
import { LeadScoreHistoryUpdateManyMutationInputSchema } from './LeadScoreHistoryUpdateManyMutationInputSchema';
import { LeadScoreHistoryUncheckedUpdateManyWithoutLeadScoreInputSchema } from './LeadScoreHistoryUncheckedUpdateManyWithoutLeadScoreInputSchema';

export const LeadScoreHistoryUpdateManyWithWhereWithoutLeadScoreInputSchema: z.ZodType<Prisma.LeadScoreHistoryUpdateManyWithWhereWithoutLeadScoreInput> = z.object({
  where: z.lazy(() => LeadScoreHistoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadScoreHistoryUpdateManyMutationInputSchema),z.lazy(() => LeadScoreHistoryUncheckedUpdateManyWithoutLeadScoreInputSchema) ]),
}).strict();

export default LeadScoreHistoryUpdateManyWithWhereWithoutLeadScoreInputSchema;
