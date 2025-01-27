import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutSocialProfilesInputSchema } from './LeadCreateWithoutSocialProfilesInputSchema';
import { LeadUncheckedCreateWithoutSocialProfilesInputSchema } from './LeadUncheckedCreateWithoutSocialProfilesInputSchema';

export const LeadCreateOrConnectWithoutSocialProfilesInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutSocialProfilesInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutSocialProfilesInputSchema),z.lazy(() => LeadUncheckedCreateWithoutSocialProfilesInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutSocialProfilesInputSchema;
