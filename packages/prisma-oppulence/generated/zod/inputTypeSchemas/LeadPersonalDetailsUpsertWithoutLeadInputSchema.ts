import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadPersonalDetailsUpdateWithoutLeadInputSchema } from './LeadPersonalDetailsUpdateWithoutLeadInputSchema';
import { LeadPersonalDetailsUncheckedUpdateWithoutLeadInputSchema } from './LeadPersonalDetailsUncheckedUpdateWithoutLeadInputSchema';
import { LeadPersonalDetailsCreateWithoutLeadInputSchema } from './LeadPersonalDetailsCreateWithoutLeadInputSchema';
import { LeadPersonalDetailsUncheckedCreateWithoutLeadInputSchema } from './LeadPersonalDetailsUncheckedCreateWithoutLeadInputSchema';
import { LeadPersonalDetailsWhereInputSchema } from './LeadPersonalDetailsWhereInputSchema';

export const LeadPersonalDetailsUpsertWithoutLeadInputSchema: z.ZodType<Prisma.LeadPersonalDetailsUpsertWithoutLeadInput> = z.object({
  update: z.union([ z.lazy(() => LeadPersonalDetailsUpdateWithoutLeadInputSchema),z.lazy(() => LeadPersonalDetailsUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadPersonalDetailsCreateWithoutLeadInputSchema),z.lazy(() => LeadPersonalDetailsUncheckedCreateWithoutLeadInputSchema) ]),
  where: z.lazy(() => LeadPersonalDetailsWhereInputSchema).optional()
}).strict();

export default LeadPersonalDetailsUpsertWithoutLeadInputSchema;
