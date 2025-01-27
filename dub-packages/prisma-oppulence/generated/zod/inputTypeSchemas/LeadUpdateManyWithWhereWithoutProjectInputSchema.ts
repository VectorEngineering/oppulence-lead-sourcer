import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema';
import { LeadUpdateManyMutationInputSchema } from './LeadUpdateManyMutationInputSchema';
import { LeadUncheckedUpdateManyWithoutProjectInputSchema } from './LeadUncheckedUpdateManyWithoutProjectInputSchema';

export const LeadUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.LeadUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => LeadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LeadUpdateManyMutationInputSchema),z.lazy(() => LeadUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default LeadUpdateManyWithWhereWithoutProjectInputSchema;
