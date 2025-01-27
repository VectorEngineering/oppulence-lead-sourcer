import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadLabelScalarWhereInputSchema } from './LeadLabelScalarWhereInputSchema';
import { LeadLabelUpdateManyMutationInputSchema } from './LeadLabelUpdateManyMutationInputSchema';
import { LeadLabelUncheckedUpdateManyWithoutLeadInputSchema } from './LeadLabelUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadLabelUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadLabelUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadLabelScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadLabelUpdateManyMutationInputSchema),z.lazy(() => LeadLabelUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadLabelUpdateManyWithWhereWithoutLeadInputSchema;
