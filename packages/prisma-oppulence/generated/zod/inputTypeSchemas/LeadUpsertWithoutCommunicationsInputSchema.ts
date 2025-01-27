import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutCommunicationsInputSchema } from './LeadUpdateWithoutCommunicationsInputSchema';
import { LeadUncheckedUpdateWithoutCommunicationsInputSchema } from './LeadUncheckedUpdateWithoutCommunicationsInputSchema';
import { LeadCreateWithoutCommunicationsInputSchema } from './LeadCreateWithoutCommunicationsInputSchema';
import { LeadUncheckedCreateWithoutCommunicationsInputSchema } from './LeadUncheckedCreateWithoutCommunicationsInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutCommunicationsInputSchema: z.ZodType<Prisma.LeadUpsertWithoutCommunicationsInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutCommunicationsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutCommunicationsInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutCommunicationsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutCommunicationsInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutCommunicationsInputSchema;
