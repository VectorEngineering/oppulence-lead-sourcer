import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadUpdateWithoutCommunicationsInputSchema } from './LeadUpdateWithoutCommunicationsInputSchema';
import { LeadUncheckedUpdateWithoutCommunicationsInputSchema } from './LeadUncheckedUpdateWithoutCommunicationsInputSchema';

export const LeadUpdateToOneWithWhereWithoutCommunicationsInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutCommunicationsInput> = z.object({
  where: z.lazy(() => LeadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadUpdateWithoutCommunicationsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutCommunicationsInputSchema) ]),
}).strict();

export default LeadUpdateToOneWithWhereWithoutCommunicationsInputSchema;
