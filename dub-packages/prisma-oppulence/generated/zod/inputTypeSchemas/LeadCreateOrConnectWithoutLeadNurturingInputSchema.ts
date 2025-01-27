import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutLeadNurturingInputSchema } from './LeadCreateWithoutLeadNurturingInputSchema';
import { LeadUncheckedCreateWithoutLeadNurturingInputSchema } from './LeadUncheckedCreateWithoutLeadNurturingInputSchema';

export const LeadCreateOrConnectWithoutLeadNurturingInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutLeadNurturingInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadNurturingInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadNurturingInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutLeadNurturingInputSchema;
