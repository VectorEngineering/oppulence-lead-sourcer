import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadRequirementWhereUniqueInputSchema } from './LeadRequirementWhereUniqueInputSchema';
import { LeadRequirementUpdateWithoutLeadInputSchema } from './LeadRequirementUpdateWithoutLeadInputSchema';
import { LeadRequirementUncheckedUpdateWithoutLeadInputSchema } from './LeadRequirementUncheckedUpdateWithoutLeadInputSchema';
import { LeadRequirementCreateWithoutLeadInputSchema } from './LeadRequirementCreateWithoutLeadInputSchema';
import { LeadRequirementUncheckedCreateWithoutLeadInputSchema } from './LeadRequirementUncheckedCreateWithoutLeadInputSchema';

export const LeadRequirementUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadRequirementUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadRequirementWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadRequirementUpdateWithoutLeadInputSchema),z.lazy(() => LeadRequirementUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadRequirementCreateWithoutLeadInputSchema),z.lazy(() => LeadRequirementUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadRequirementUpsertWithWhereUniqueWithoutLeadInputSchema;
