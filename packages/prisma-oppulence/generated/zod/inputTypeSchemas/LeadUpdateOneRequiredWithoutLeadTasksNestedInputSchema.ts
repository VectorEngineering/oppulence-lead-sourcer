import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLeadTasksInputSchema } from './LeadCreateWithoutLeadTasksInputSchema';
import { LeadUncheckedCreateWithoutLeadTasksInputSchema } from './LeadUncheckedCreateWithoutLeadTasksInputSchema';
import { LeadCreateOrConnectWithoutLeadTasksInputSchema } from './LeadCreateOrConnectWithoutLeadTasksInputSchema';
import { LeadUpsertWithoutLeadTasksInputSchema } from './LeadUpsertWithoutLeadTasksInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutLeadTasksInputSchema } from './LeadUpdateToOneWithWhereWithoutLeadTasksInputSchema';
import { LeadUpdateWithoutLeadTasksInputSchema } from './LeadUpdateWithoutLeadTasksInputSchema';
import { LeadUncheckedUpdateWithoutLeadTasksInputSchema } from './LeadUncheckedUpdateWithoutLeadTasksInputSchema';

export const LeadUpdateOneRequiredWithoutLeadTasksNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutLeadTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadTasksInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadTasksInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutLeadTasksInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutLeadTasksInputSchema),z.lazy(() => LeadUpdateWithoutLeadTasksInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadTasksInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutLeadTasksNestedInputSchema;
