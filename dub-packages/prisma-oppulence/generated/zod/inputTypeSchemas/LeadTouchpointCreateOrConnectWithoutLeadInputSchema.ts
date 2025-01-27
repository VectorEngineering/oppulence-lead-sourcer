import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTouchpointWhereUniqueInputSchema } from './LeadTouchpointWhereUniqueInputSchema';
import { LeadTouchpointCreateWithoutLeadInputSchema } from './LeadTouchpointCreateWithoutLeadInputSchema';
import { LeadTouchpointUncheckedCreateWithoutLeadInputSchema } from './LeadTouchpointUncheckedCreateWithoutLeadInputSchema';

export const LeadTouchpointCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadTouchpointCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadTouchpointWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadTouchpointCreateWithoutLeadInputSchema),z.lazy(() => LeadTouchpointUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadTouchpointCreateOrConnectWithoutLeadInputSchema;
