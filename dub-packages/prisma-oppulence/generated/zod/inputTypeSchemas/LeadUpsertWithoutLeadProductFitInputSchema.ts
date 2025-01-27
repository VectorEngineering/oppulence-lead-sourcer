import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutLeadProductFitInputSchema } from './LeadUpdateWithoutLeadProductFitInputSchema';
import { LeadUncheckedUpdateWithoutLeadProductFitInputSchema } from './LeadUncheckedUpdateWithoutLeadProductFitInputSchema';
import { LeadCreateWithoutLeadProductFitInputSchema } from './LeadCreateWithoutLeadProductFitInputSchema';
import { LeadUncheckedCreateWithoutLeadProductFitInputSchema } from './LeadUncheckedCreateWithoutLeadProductFitInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutLeadProductFitInputSchema: z.ZodType<Prisma.LeadUpsertWithoutLeadProductFitInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutLeadProductFitInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadProductFitInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadProductFitInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadProductFitInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutLeadProductFitInputSchema;
