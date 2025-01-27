import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadUpdateWithoutLeadNurturingInputSchema } from './LeadUpdateWithoutLeadNurturingInputSchema';
import { LeadUncheckedUpdateWithoutLeadNurturingInputSchema } from './LeadUncheckedUpdateWithoutLeadNurturingInputSchema';

export const LeadUpdateToOneWithWhereWithoutLeadNurturingInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutLeadNurturingInput> = z.object({
  where: z.lazy(() => LeadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadUpdateWithoutLeadNurturingInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadNurturingInputSchema) ]),
}).strict();

export default LeadUpdateToOneWithWhereWithoutLeadNurturingInputSchema;
