import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutDealsInputSchema } from './LeadCreateWithoutDealsInputSchema';
import { LeadUncheckedCreateWithoutDealsInputSchema } from './LeadUncheckedCreateWithoutDealsInputSchema';

export const LeadCreateOrConnectWithoutDealsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutDealsInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutDealsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutDealsInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutDealsInputSchema;
