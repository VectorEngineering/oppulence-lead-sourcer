import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutLeadNurturingInputSchema } from './LeadUpdateWithoutLeadNurturingInputSchema';
import { LeadUncheckedUpdateWithoutLeadNurturingInputSchema } from './LeadUncheckedUpdateWithoutLeadNurturingInputSchema';
import { LeadCreateWithoutLeadNurturingInputSchema } from './LeadCreateWithoutLeadNurturingInputSchema';
import { LeadUncheckedCreateWithoutLeadNurturingInputSchema } from './LeadUncheckedCreateWithoutLeadNurturingInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutLeadNurturingInputSchema: z.ZodType<Prisma.LeadUpsertWithoutLeadNurturingInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutLeadNurturingInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadNurturingInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadNurturingInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadNurturingInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutLeadNurturingInputSchema;
