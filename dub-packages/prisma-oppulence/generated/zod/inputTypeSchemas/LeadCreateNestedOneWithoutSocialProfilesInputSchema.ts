import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutSocialProfilesInputSchema } from './LeadCreateWithoutSocialProfilesInputSchema';
import { LeadUncheckedCreateWithoutSocialProfilesInputSchema } from './LeadUncheckedCreateWithoutSocialProfilesInputSchema';
import { LeadCreateOrConnectWithoutSocialProfilesInputSchema } from './LeadCreateOrConnectWithoutSocialProfilesInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutSocialProfilesInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutSocialProfilesInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutSocialProfilesInputSchema),z.lazy(() => LeadUncheckedCreateWithoutSocialProfilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutSocialProfilesInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutSocialProfilesInputSchema;
