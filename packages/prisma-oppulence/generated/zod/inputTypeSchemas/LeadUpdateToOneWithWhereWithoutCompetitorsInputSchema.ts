import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadUpdateWithoutCompetitorsInputSchema } from './LeadUpdateWithoutCompetitorsInputSchema';
import { LeadUncheckedUpdateWithoutCompetitorsInputSchema } from './LeadUncheckedUpdateWithoutCompetitorsInputSchema';

export const LeadUpdateToOneWithWhereWithoutCompetitorsInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutCompetitorsInput> = z.object({
  where: z.lazy(() => LeadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadUpdateWithoutCompetitorsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutCompetitorsInputSchema) ]),
}).strict();

export default LeadUpdateToOneWithWhereWithoutCompetitorsInputSchema;
