import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutCompetitorsInputSchema } from './LeadUpdateWithoutCompetitorsInputSchema';
import { LeadUncheckedUpdateWithoutCompetitorsInputSchema } from './LeadUncheckedUpdateWithoutCompetitorsInputSchema';
import { LeadCreateWithoutCompetitorsInputSchema } from './LeadCreateWithoutCompetitorsInputSchema';
import { LeadUncheckedCreateWithoutCompetitorsInputSchema } from './LeadUncheckedCreateWithoutCompetitorsInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutCompetitorsInputSchema: z.ZodType<Prisma.LeadUpsertWithoutCompetitorsInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutCompetitorsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutCompetitorsInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutCompetitorsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutCompetitorsInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutCompetitorsInputSchema;
