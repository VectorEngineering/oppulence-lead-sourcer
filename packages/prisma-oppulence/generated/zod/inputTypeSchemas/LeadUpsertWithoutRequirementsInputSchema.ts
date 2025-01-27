import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutRequirementsInputSchema } from './LeadUpdateWithoutRequirementsInputSchema';
import { LeadUncheckedUpdateWithoutRequirementsInputSchema } from './LeadUncheckedUpdateWithoutRequirementsInputSchema';
import { LeadCreateWithoutRequirementsInputSchema } from './LeadCreateWithoutRequirementsInputSchema';
import { LeadUncheckedCreateWithoutRequirementsInputSchema } from './LeadUncheckedCreateWithoutRequirementsInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutRequirementsInputSchema: z.ZodType<Prisma.LeadUpsertWithoutRequirementsInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutRequirementsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutRequirementsInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutRequirementsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutRequirementsInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutRequirementsInputSchema;
