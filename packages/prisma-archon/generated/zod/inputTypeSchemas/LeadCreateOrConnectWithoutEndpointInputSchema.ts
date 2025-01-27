import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutEndpointInputSchema } from './LeadCreateWithoutEndpointInputSchema';
import { LeadUncheckedCreateWithoutEndpointInputSchema } from './LeadUncheckedCreateWithoutEndpointInputSchema';

export const LeadCreateOrConnectWithoutEndpointInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutEndpointInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutEndpointInputSchema),z.lazy(() => LeadUncheckedCreateWithoutEndpointInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutEndpointInputSchema;
