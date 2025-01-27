import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadNurturingWhereUniqueInputSchema } from './LeadNurturingWhereUniqueInputSchema';
import { LeadNurturingUpdateWithoutLeadInputSchema } from './LeadNurturingUpdateWithoutLeadInputSchema';
import { LeadNurturingUncheckedUpdateWithoutLeadInputSchema } from './LeadNurturingUncheckedUpdateWithoutLeadInputSchema';

export const LeadNurturingUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadNurturingUpdateWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadNurturingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadNurturingUpdateWithoutLeadInputSchema),z.lazy(() => LeadNurturingUncheckedUpdateWithoutLeadInputSchema) ]),
}).strict();

export default LeadNurturingUpdateWithWhereUniqueWithoutLeadInputSchema;
