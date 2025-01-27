import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema';
import { LeadUpdateManyMutationInputSchema } from './LeadUpdateManyMutationInputSchema';
import { LeadUncheckedUpdateManyWithoutAssignedToInputSchema } from './LeadUncheckedUpdateManyWithoutAssignedToInputSchema';

export const LeadUpdateManyWithWhereWithoutAssignedToInputSchema: z.ZodType<Prisma.LeadUpdateManyWithWhereWithoutAssignedToInput> = z.object({
  where: z.lazy(() => LeadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadUpdateManyMutationInputSchema),z.lazy(() => LeadUncheckedUpdateManyWithoutAssignedToInputSchema) ]),
}).strict();

export default LeadUpdateManyWithWhereWithoutAssignedToInputSchema;
