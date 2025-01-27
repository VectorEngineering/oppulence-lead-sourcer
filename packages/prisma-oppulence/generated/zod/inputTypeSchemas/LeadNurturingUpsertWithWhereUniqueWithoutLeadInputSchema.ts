import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadNurturingWhereUniqueInputSchema } from './LeadNurturingWhereUniqueInputSchema';
import { LeadNurturingUpdateWithoutLeadInputSchema } from './LeadNurturingUpdateWithoutLeadInputSchema';
import { LeadNurturingUncheckedUpdateWithoutLeadInputSchema } from './LeadNurturingUncheckedUpdateWithoutLeadInputSchema';
import { LeadNurturingCreateWithoutLeadInputSchema } from './LeadNurturingCreateWithoutLeadInputSchema';
import { LeadNurturingUncheckedCreateWithoutLeadInputSchema } from './LeadNurturingUncheckedCreateWithoutLeadInputSchema';

export const LeadNurturingUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadNurturingUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadNurturingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadNurturingUpdateWithoutLeadInputSchema),z.lazy(() => LeadNurturingUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadNurturingCreateWithoutLeadInputSchema),z.lazy(() => LeadNurturingUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadNurturingUpsertWithWhereUniqueWithoutLeadInputSchema;
