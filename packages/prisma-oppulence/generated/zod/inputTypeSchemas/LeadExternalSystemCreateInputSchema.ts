import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadExternalSystemProviderSchema } from './LeadExternalSystemProviderSchema';
import { LeadCreateNestedOneWithoutExternalSystemsInputSchema } from './LeadCreateNestedOneWithoutExternalSystemsInputSchema';

export const LeadExternalSystemCreateInputSchema: z.ZodType<Prisma.LeadExternalSystemCreateInput> = z.object({
  id: z.string().cuid().optional(),
  provider: z.lazy(() => LeadExternalSystemProviderSchema),
  externalId: z.string(),
  lastSynced: z.coerce.date(),
  syncStatus: z.string(),
  errorMessage: z.string().optional().nullable(),
  lead: z.lazy(() => LeadCreateNestedOneWithoutExternalSystemsInputSchema)
}).strict();

export default LeadExternalSystemCreateInputSchema;
