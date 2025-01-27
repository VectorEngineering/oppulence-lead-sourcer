import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateNestedOneWithoutConsentsInputSchema } from './LeadCreateNestedOneWithoutConsentsInputSchema';

export const LeadConsentCreateInputSchema: z.ZodType<Prisma.LeadConsentCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  status: z.boolean(),
  source: z.string(),
  ipAddress: z.string().optional().nullable(),
  timestamp: z.coerce.date(),
  expiryDate: z.coerce.date().optional().nullable(),
  document: z.string().optional().nullable(),
  lead: z.lazy(() => LeadCreateNestedOneWithoutConsentsInputSchema)
}).strict();

export default LeadConsentCreateInputSchema;
