import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreWhereUniqueInputSchema } from './LeadScoreWhereUniqueInputSchema';
import { LeadScoreUpdateWithoutLeadInputSchema } from './LeadScoreUpdateWithoutLeadInputSchema';
import { LeadScoreUncheckedUpdateWithoutLeadInputSchema } from './LeadScoreUncheckedUpdateWithoutLeadInputSchema';
import { LeadScoreCreateWithoutLeadInputSchema } from './LeadScoreCreateWithoutLeadInputSchema';
import { LeadScoreUncheckedCreateWithoutLeadInputSchema } from './LeadScoreUncheckedCreateWithoutLeadInputSchema';

export const LeadScoreUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadScoreUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadScoreWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadScoreUpdateWithoutLeadInputSchema),z.lazy(() => LeadScoreUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadScoreCreateWithoutLeadInputSchema),z.lazy(() => LeadScoreUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadScoreUpsertWithWhereUniqueWithoutLeadInputSchema;
