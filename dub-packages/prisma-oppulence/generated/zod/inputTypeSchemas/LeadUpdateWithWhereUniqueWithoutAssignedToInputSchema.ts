import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateWithoutAssignedToInputSchema } from './LeadUpdateWithoutAssignedToInputSchema';
import { LeadUncheckedUpdateWithoutAssignedToInputSchema } from './LeadUncheckedUpdateWithoutAssignedToInputSchema';

export const LeadUpdateWithWhereUniqueWithoutAssignedToInputSchema: z.ZodType<Prisma.LeadUpdateWithWhereUniqueWithoutAssignedToInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadUpdateWithoutAssignedToInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutAssignedToInputSchema) ]),
}).strict();

export default LeadUpdateWithWhereUniqueWithoutAssignedToInputSchema;
