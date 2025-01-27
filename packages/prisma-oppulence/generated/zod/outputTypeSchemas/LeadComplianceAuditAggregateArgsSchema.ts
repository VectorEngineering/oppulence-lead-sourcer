import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadComplianceAuditWhereInputSchema } from '../inputTypeSchemas/LeadComplianceAuditWhereInputSchema'
import { LeadComplianceAuditOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadComplianceAuditOrderByWithRelationInputSchema'
import { LeadComplianceAuditWhereUniqueInputSchema } from '../inputTypeSchemas/LeadComplianceAuditWhereUniqueInputSchema'

export const LeadComplianceAuditAggregateArgsSchema: z.ZodType<Prisma.LeadComplianceAuditAggregateArgs> = z
    .object({
        where: LeadComplianceAuditWhereInputSchema.optional(),
        orderBy: z
            .union([LeadComplianceAuditOrderByWithRelationInputSchema.array(), LeadComplianceAuditOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadComplianceAuditWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadComplianceAuditAggregateArgsSchema
