import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutSocialProfilesInputSchema } from './LeadCreateWithoutSocialProfilesInputSchema';
import { LeadUncheckedCreateWithoutSocialProfilesInputSchema } from './LeadUncheckedCreateWithoutSocialProfilesInputSchema';
import { LeadCreateOrConnectWithoutSocialProfilesInputSchema } from './LeadCreateOrConnectWithoutSocialProfilesInputSchema';
import { LeadUpsertWithoutSocialProfilesInputSchema } from './LeadUpsertWithoutSocialProfilesInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutSocialProfilesInputSchema } from './LeadUpdateToOneWithWhereWithoutSocialProfilesInputSchema';
import { LeadUpdateWithoutSocialProfilesInputSchema } from './LeadUpdateWithoutSocialProfilesInputSchema';
import { LeadUncheckedUpdateWithoutSocialProfilesInputSchema } from './LeadUncheckedUpdateWithoutSocialProfilesInputSchema';

export const LeadUpdateOneRequiredWithoutSocialProfilesNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutSocialProfilesNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutSocialProfilesInputSchema),z.lazy(() => LeadUncheckedCreateWithoutSocialProfilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutSocialProfilesInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutSocialProfilesInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutSocialProfilesInputSchema),z.lazy(() => LeadUpdateWithoutSocialProfilesInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutSocialProfilesInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutSocialProfilesNestedInputSchema;
