import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreWhereUniqueInputSchema } from './LeadScoreWhereUniqueInputSchema';
import { LeadScoreCreateWithoutLeadInputSchema } from './LeadScoreCreateWithoutLeadInputSchema';
import { LeadScoreUncheckedCreateWithoutLeadInputSchema } from './LeadScoreUncheckedCreateWithoutLeadInputSchema';

export const LeadScoreCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadScoreCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadScoreWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadScoreCreateWithoutLeadInputSchema),z.lazy(() => LeadScoreUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadScoreCreateOrConnectWithoutLeadInputSchema;
