import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTaskScalarWhereInputSchema } from './LeadTaskScalarWhereInputSchema';
import { LeadTaskUpdateManyMutationInputSchema } from './LeadTaskUpdateManyMutationInputSchema';
import { LeadTaskUncheckedUpdateManyWithoutAssignedToInputSchema } from './LeadTaskUncheckedUpdateManyWithoutAssignedToInputSchema';

export const LeadTaskUpdateManyWithWhereWithoutAssignedToInputSchema: z.ZodType<Prisma.LeadTaskUpdateManyWithWhereWithoutAssignedToInput> = z.object({
  where: z.lazy(() => LeadTaskScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadTaskUpdateManyMutationInputSchema),z.lazy(() => LeadTaskUncheckedUpdateManyWithoutAssignedToInputSchema) ]),
}).strict();

export default LeadTaskUpdateManyWithWhereWithoutAssignedToInputSchema;
