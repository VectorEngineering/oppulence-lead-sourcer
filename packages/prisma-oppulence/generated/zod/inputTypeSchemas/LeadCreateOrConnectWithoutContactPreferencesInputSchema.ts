import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutContactPreferencesInputSchema } from './LeadCreateWithoutContactPreferencesInputSchema';
import { LeadUncheckedCreateWithoutContactPreferencesInputSchema } from './LeadUncheckedCreateWithoutContactPreferencesInputSchema';

export const LeadCreateOrConnectWithoutContactPreferencesInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutContactPreferencesInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutContactPreferencesInputSchema),z.lazy(() => LeadUncheckedCreateWithoutContactPreferencesInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutContactPreferencesInputSchema;
