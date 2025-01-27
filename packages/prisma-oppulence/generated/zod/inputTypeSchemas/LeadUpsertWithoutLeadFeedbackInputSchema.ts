import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutLeadFeedbackInputSchema } from './LeadUpdateWithoutLeadFeedbackInputSchema';
import { LeadUncheckedUpdateWithoutLeadFeedbackInputSchema } from './LeadUncheckedUpdateWithoutLeadFeedbackInputSchema';
import { LeadCreateWithoutLeadFeedbackInputSchema } from './LeadCreateWithoutLeadFeedbackInputSchema';
import { LeadUncheckedCreateWithoutLeadFeedbackInputSchema } from './LeadUncheckedCreateWithoutLeadFeedbackInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutLeadFeedbackInputSchema: z.ZodType<Prisma.LeadUpsertWithoutLeadFeedbackInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutLeadFeedbackInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadFeedbackInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadFeedbackInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadFeedbackInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutLeadFeedbackInputSchema;
