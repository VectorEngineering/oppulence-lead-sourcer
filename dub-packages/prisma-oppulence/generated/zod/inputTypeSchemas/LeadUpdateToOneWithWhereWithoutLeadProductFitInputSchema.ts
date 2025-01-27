import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadUpdateWithoutLeadProductFitInputSchema } from './LeadUpdateWithoutLeadProductFitInputSchema';
import { LeadUncheckedUpdateWithoutLeadProductFitInputSchema } from './LeadUncheckedUpdateWithoutLeadProductFitInputSchema';

export const LeadUpdateToOneWithWhereWithoutLeadProductFitInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutLeadProductFitInput> = z.object({
  where: z.lazy(() => LeadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadUpdateWithoutLeadProductFitInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadProductFitInputSchema) ]),
}).strict();

export default LeadUpdateToOneWithWhereWithoutLeadProductFitInputSchema;
