import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutTouchpointsInputSchema } from './LeadCreateWithoutTouchpointsInputSchema';
import { LeadUncheckedCreateWithoutTouchpointsInputSchema } from './LeadUncheckedCreateWithoutTouchpointsInputSchema';

export const LeadCreateOrConnectWithoutTouchpointsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutTouchpointsInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutTouchpointsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutTouchpointsInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutTouchpointsInputSchema;
