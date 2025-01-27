import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LeadLabelLeadIdNameCompoundUniqueInputSchema: z.ZodType<Prisma.LeadLabelLeadIdNameCompoundUniqueInput> = z.object({
  leadId: z.string(),
  name: z.string()
}).strict();

export default LeadLabelLeadIdNameCompoundUniqueInputSchema;
