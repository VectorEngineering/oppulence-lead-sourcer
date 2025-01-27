import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSocialPlatformSchema } from './LeadSocialPlatformSchema';
import { LeadCreateNestedOneWithoutSocialProfilesInputSchema } from './LeadCreateNestedOneWithoutSocialProfilesInputSchema';

export const LeadSocialProfileCreateInputSchema: z.ZodType<Prisma.LeadSocialProfileCreateInput> = z.object({
  id: z.string().cuid().optional(),
  platform: z.lazy(() => LeadSocialPlatformSchema),
  profileUrl: z.string(),
  username: z.string().optional().nullable(),
  lastSynced: z.coerce.date().optional().nullable(),
  lead: z.lazy(() => LeadCreateNestedOneWithoutSocialProfilesInputSchema)
}).strict();

export default LeadSocialProfileCreateInputSchema;
