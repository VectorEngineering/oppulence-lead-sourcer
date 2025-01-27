import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutLeadTasksInputSchema } from './LeadUpdateWithoutLeadTasksInputSchema';
import { LeadUncheckedUpdateWithoutLeadTasksInputSchema } from './LeadUncheckedUpdateWithoutLeadTasksInputSchema';
import { LeadCreateWithoutLeadTasksInputSchema } from './LeadCreateWithoutLeadTasksInputSchema';
import { LeadUncheckedCreateWithoutLeadTasksInputSchema } from './LeadUncheckedCreateWithoutLeadTasksInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutLeadTasksInputSchema: z.ZodType<Prisma.LeadUpsertWithoutLeadTasksInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutLeadTasksInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadTasksInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadTasksInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadTasksInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutLeadTasksInputSchema;
