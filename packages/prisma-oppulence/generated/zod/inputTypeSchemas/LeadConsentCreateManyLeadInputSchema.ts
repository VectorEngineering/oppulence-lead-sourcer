import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadConsentCreateManyLeadInputSchema: z.ZodType<Prisma.LeadConsentCreateManyLeadInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  status: z.boolean(),
  source: z.string(),
  ipAddress: z.string().optional().nullable(),
  timestamp: z.coerce.date(),
  expiryDate: z.coerce.date().optional().nullable(),
  document: z.string().optional().nullable()
}).strict();

export default LeadConsentCreateManyLeadInputSchema;
