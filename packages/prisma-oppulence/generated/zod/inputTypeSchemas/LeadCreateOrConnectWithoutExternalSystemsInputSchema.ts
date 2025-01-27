import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutExternalSystemsInputSchema } from './LeadCreateWithoutExternalSystemsInputSchema';
import { LeadUncheckedCreateWithoutExternalSystemsInputSchema } from './LeadUncheckedCreateWithoutExternalSystemsInputSchema';

export const LeadCreateOrConnectWithoutExternalSystemsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutExternalSystemsInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutExternalSystemsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutExternalSystemsInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutExternalSystemsInputSchema;
