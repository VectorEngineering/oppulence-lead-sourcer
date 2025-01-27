import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreWhereUniqueInputSchema } from './LeadScoreWhereUniqueInputSchema';
import { LeadScoreCreateWithoutScoreHistoryInputSchema } from './LeadScoreCreateWithoutScoreHistoryInputSchema';
import { LeadScoreUncheckedCreateWithoutScoreHistoryInputSchema } from './LeadScoreUncheckedCreateWithoutScoreHistoryInputSchema';

export const LeadScoreCreateOrConnectWithoutScoreHistoryInputSchema: z.ZodType<Prisma.LeadScoreCreateOrConnectWithoutScoreHistoryInput> = z.object({
  where: z.lazy(() => LeadScoreWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadScoreCreateWithoutScoreHistoryInputSchema),z.lazy(() => LeadScoreUncheckedCreateWithoutScoreHistoryInputSchema) ]),
}).strict();

export default LeadScoreCreateOrConnectWithoutScoreHistoryInputSchema;
