import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLeadTasksInputSchema } from './LeadCreateWithoutLeadTasksInputSchema';
import { LeadUncheckedCreateWithoutLeadTasksInputSchema } from './LeadUncheckedCreateWithoutLeadTasksInputSchema';
import { LeadCreateOrConnectWithoutLeadTasksInputSchema } from './LeadCreateOrConnectWithoutLeadTasksInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutLeadTasksInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutLeadTasksInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadTasksInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadTasksInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutLeadTasksInputSchema;
