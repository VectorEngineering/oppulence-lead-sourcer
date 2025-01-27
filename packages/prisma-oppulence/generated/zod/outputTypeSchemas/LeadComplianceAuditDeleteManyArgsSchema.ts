import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadComplianceAuditWhereInputSchema } from '../inputTypeSchemas/LeadComplianceAuditWhereInputSchema'

export const LeadComplianceAuditDeleteManyArgsSchema: z.ZodType<Prisma.LeadComplianceAuditDeleteManyArgs> = z
    .object({
        where: LeadComplianceAuditWhereInputSchema.optional()
    })
    .strict()

export default LeadComplianceAuditDeleteManyArgsSchema
