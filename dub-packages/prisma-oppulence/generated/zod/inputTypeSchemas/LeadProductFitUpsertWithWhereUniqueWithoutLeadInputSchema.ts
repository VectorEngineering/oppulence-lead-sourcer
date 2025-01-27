import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitWhereUniqueInputSchema } from './LeadProductFitWhereUniqueInputSchema';
import { LeadProductFitUpdateWithoutLeadInputSchema } from './LeadProductFitUpdateWithoutLeadInputSchema';
import { LeadProductFitUncheckedUpdateWithoutLeadInputSchema } from './LeadProductFitUncheckedUpdateWithoutLeadInputSchema';
import { LeadProductFitCreateWithoutLeadInputSchema } from './LeadProductFitCreateWithoutLeadInputSchema';
import { LeadProductFitUncheckedCreateWithoutLeadInputSchema } from './LeadProductFitUncheckedCreateWithoutLeadInputSchema';

export const LeadProductFitUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadProductFitUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadProductFitWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadProductFitUpdateWithoutLeadInputSchema),z.lazy(() => LeadProductFitUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadProductFitCreateWithoutLeadInputSchema),z.lazy(() => LeadProductFitUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadProductFitUpsertWithWhereUniqueWithoutLeadInputSchema;
