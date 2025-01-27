import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutRequirementsInputSchema } from './LeadCreateWithoutRequirementsInputSchema';
import { LeadUncheckedCreateWithoutRequirementsInputSchema } from './LeadUncheckedCreateWithoutRequirementsInputSchema';

export const LeadCreateOrConnectWithoutRequirementsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutRequirementsInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutRequirementsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutRequirementsInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutRequirementsInputSchema;
