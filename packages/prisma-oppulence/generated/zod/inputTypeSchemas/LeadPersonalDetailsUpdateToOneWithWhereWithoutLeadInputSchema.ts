import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadPersonalDetailsWhereInputSchema } from './LeadPersonalDetailsWhereInputSchema';
import { LeadPersonalDetailsUpdateWithoutLeadInputSchema } from './LeadPersonalDetailsUpdateWithoutLeadInputSchema';
import { LeadPersonalDetailsUncheckedUpdateWithoutLeadInputSchema } from './LeadPersonalDetailsUncheckedUpdateWithoutLeadInputSchema';

export const LeadPersonalDetailsUpdateToOneWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.LeadPersonalDetailsUpdateToOneWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadPersonalDetailsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadPersonalDetailsUpdateWithoutLeadInputSchema),z.lazy(() => LeadPersonalDetailsUncheckedUpdateWithoutLeadInputSchema) ]),
}).strict();

export default LeadPersonalDetailsUpdateToOneWithWhereWithoutLeadInputSchema;
