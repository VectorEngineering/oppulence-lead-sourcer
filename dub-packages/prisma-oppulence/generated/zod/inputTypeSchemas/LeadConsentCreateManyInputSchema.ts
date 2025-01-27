import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadConsentCreateManyInputSchema: z.ZodType<Prisma.LeadConsentCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  leadId: z.string(),
  type: z.string(),
  status: z.boolean(),
  source: z.string(),
  ipAddress: z.string().optional().nullable(),
  timestamp: z.coerce.date(),
  expiryDate: z.coerce.date().optional().nullable(),
  document: z.string().optional().nullable()
}).strict();

export default LeadConsentCreateManyInputSchema;
