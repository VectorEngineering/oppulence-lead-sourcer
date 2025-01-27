import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadComplianceAuditCreateManyInputSchema } from '../inputTypeSchemas/LeadComplianceAuditCreateManyInputSchema'

export const LeadComplianceAuditCreateManyArgsSchema: z.ZodType<Prisma.LeadComplianceAuditCreateManyArgs> = z.object({
  data: z.union([ LeadComplianceAuditCreateManyInputSchema,LeadComplianceAuditCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadComplianceAuditCreateManyArgsSchema;
