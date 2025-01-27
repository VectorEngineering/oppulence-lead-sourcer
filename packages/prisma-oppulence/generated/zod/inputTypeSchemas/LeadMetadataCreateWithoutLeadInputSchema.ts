import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadMetadataCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadMetadataCreateWithoutLeadInput> = z.object({
  id: z.string().cuid().optional(),
  key: z.string(),
  value: z.string(),
  type: z.string(),
  category: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isSearchable: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default LeadMetadataCreateWithoutLeadInputSchema;
