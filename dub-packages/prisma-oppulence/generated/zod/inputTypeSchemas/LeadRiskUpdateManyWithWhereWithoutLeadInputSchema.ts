import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadRiskScalarWhereInputSchema } from './LeadRiskScalarWhereInputSchema';
import { LeadRiskUpdateManyMutationInputSchema } from './LeadRiskUpdateManyMutationInputSchema';
import { LeadRiskUncheckedUpdateManyWithoutLeadInputSchema } from './LeadRiskUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadRiskUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadRiskUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadRiskScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadRiskUpdateManyMutationInputSchema),z.lazy(() => LeadRiskUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadRiskUpdateManyWithWhereWithoutLeadInputSchema;
