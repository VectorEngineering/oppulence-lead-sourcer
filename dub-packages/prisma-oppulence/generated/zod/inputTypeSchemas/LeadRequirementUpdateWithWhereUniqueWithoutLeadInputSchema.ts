import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadRequirementWhereUniqueInputSchema } from './LeadRequirementWhereUniqueInputSchema';
import { LeadRequirementUpdateWithoutLeadInputSchema } from './LeadRequirementUpdateWithoutLeadInputSchema';
import { LeadRequirementUncheckedUpdateWithoutLeadInputSchema } from './LeadRequirementUncheckedUpdateWithoutLeadInputSchema';

export const LeadRequirementUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadRequirementUpdateWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadRequirementWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadRequirementUpdateWithoutLeadInputSchema),z.lazy(() => LeadRequirementUncheckedUpdateWithoutLeadInputSchema) ]),
}).strict();

export default LeadRequirementUpdateWithWhereUniqueWithoutLeadInputSchema;
