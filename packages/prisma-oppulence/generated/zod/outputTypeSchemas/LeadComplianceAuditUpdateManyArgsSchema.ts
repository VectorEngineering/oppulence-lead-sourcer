import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadComplianceAuditUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadComplianceAuditUpdateManyMutationInputSchema'
import { LeadComplianceAuditUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadComplianceAuditUncheckedUpdateManyInputSchema'
import { LeadComplianceAuditWhereInputSchema } from '../inputTypeSchemas/LeadComplianceAuditWhereInputSchema'

export const LeadComplianceAuditUpdateManyArgsSchema: z.ZodType<Prisma.LeadComplianceAuditUpdateManyArgs> = z.object({
  data: z.union([ LeadComplianceAuditUpdateManyMutationInputSchema,LeadComplianceAuditUncheckedUpdateManyInputSchema ]),
  where: LeadComplianceAuditWhereInputSchema.optional(),
}).strict() ;

export default LeadComplianceAuditUpdateManyArgsSchema;
