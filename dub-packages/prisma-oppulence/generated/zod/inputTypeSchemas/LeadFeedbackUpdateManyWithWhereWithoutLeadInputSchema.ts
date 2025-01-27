import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadFeedbackScalarWhereInputSchema } from './LeadFeedbackScalarWhereInputSchema';
import { LeadFeedbackUpdateManyMutationInputSchema } from './LeadFeedbackUpdateManyMutationInputSchema';
import { LeadFeedbackUncheckedUpdateManyWithoutLeadInputSchema } from './LeadFeedbackUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadFeedbackUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadFeedbackUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadFeedbackScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadFeedbackUpdateManyMutationInputSchema),z.lazy(() => LeadFeedbackUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadFeedbackUpdateManyWithWhereWithoutLeadInputSchema;
