import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSocialPlatformSchema } from './LeadSocialPlatformSchema';

export const EnumLeadSocialPlatformFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLeadSocialPlatformFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LeadSocialPlatformSchema).optional()
}).strict();

export default EnumLeadSocialPlatformFieldUpdateOperationsInputSchema;
