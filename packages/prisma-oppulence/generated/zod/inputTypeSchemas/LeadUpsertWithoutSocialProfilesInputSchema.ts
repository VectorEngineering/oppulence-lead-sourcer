import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutSocialProfilesInputSchema } from './LeadUpdateWithoutSocialProfilesInputSchema';
import { LeadUncheckedUpdateWithoutSocialProfilesInputSchema } from './LeadUncheckedUpdateWithoutSocialProfilesInputSchema';
import { LeadCreateWithoutSocialProfilesInputSchema } from './LeadCreateWithoutSocialProfilesInputSchema';
import { LeadUncheckedCreateWithoutSocialProfilesInputSchema } from './LeadUncheckedCreateWithoutSocialProfilesInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutSocialProfilesInputSchema: z.ZodType<Prisma.LeadUpsertWithoutSocialProfilesInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutSocialProfilesInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutSocialProfilesInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutSocialProfilesInputSchema),z.lazy(() => LeadUncheckedCreateWithoutSocialProfilesInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutSocialProfilesInputSchema;
