import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadRequirementScalarWhereInputSchema } from './LeadRequirementScalarWhereInputSchema';
import { LeadRequirementUpdateManyMutationInputSchema } from './LeadRequirementUpdateManyMutationInputSchema';
import { LeadRequirementUncheckedUpdateManyWithoutLeadInputSchema } from './LeadRequirementUncheckedUpdateManyWithoutLeadInputSchema';

export const LeadRequirementUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadRequirementUpdateManyWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadRequirementScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadRequirementUpdateManyMutationInputSchema),z.lazy(() => LeadRequirementUncheckedUpdateManyWithoutLeadInputSchema) ]),
}).strict();

export default LeadRequirementUpdateManyWithWhereWithoutLeadInputSchema;
