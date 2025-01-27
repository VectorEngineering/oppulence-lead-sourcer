import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreScalarWhereInputSchema } from './LeadScoreScalarWhereInputSchema';
import { LeadScoreUpdateManyMutationInputSchema } from './LeadScoreUpdateManyMutationInputSchema';
import { LeadScoreUncheckedUpdateManyWithoutLeadInputSchema } from './LeadScoreUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadScoreUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadScoreUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadScoreScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadScoreUpdateManyMutationInputSchema),z.lazy(() => LeadScoreUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadScoreUpdateManyWithWhereWithoutLeadInputSchema;
