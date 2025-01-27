import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadExternalSystemProviderSchema } from './LeadExternalSystemProviderSchema';

export const LeadExternalSystemCreateManyInputSchema: z.ZodType<Prisma.LeadExternalSystemCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  leadId: z.string(),
  provider: z.lazy(() => LeadExternalSystemProviderSchema),
  externalId: z.string(),
  lastSynced: z.coerce.date(),
  syncStatus: z.string(),
  errorMessage: z.string().optional().nullable()
}).strict();

export default LeadExternalSystemCreateManyInputSchema;
