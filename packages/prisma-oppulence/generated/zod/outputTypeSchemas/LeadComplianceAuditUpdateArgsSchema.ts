import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadComplianceAuditIncludeSchema } from '../inputTypeSchemas/LeadComplianceAuditIncludeSchema'
import { LeadComplianceAuditUpdateInputSchema } from '../inputTypeSchemas/LeadComplianceAuditUpdateInputSchema'
import { LeadComplianceAuditUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadComplianceAuditUncheckedUpdateInputSchema'
import { LeadComplianceAuditWhereUniqueInputSchema } from '../inputTypeSchemas/LeadComplianceAuditWhereUniqueInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
import { LeadComplianceHistoryFindManyArgsSchema } from './LeadComplianceHistoryFindManyArgsSchema'
import { LeadComplianceAuditCountOutputTypeArgsSchema } from './LeadComplianceAuditCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadComplianceAuditSelectSchema: z.ZodType<Prisma.LeadComplianceAuditSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        type: z.boolean().optional(),
        status: z.boolean().optional(),
        findings: z.boolean().optional(),
        requirements: z.boolean().optional(),
        documentation: z.boolean().optional(),
        evidences: z.boolean().optional(),
        riskLevel: z.boolean().optional(),
        riskFactors: z.boolean().optional(),
        mitigationSteps: z.boolean().optional(),
        reviewedBy: z.boolean().optional(),
        reviewedAt: z.boolean().optional(),
        nextReviewDate: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional(),
        auditHistory: z.union([z.boolean(), z.lazy(() => LeadComplianceHistoryFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadComplianceAuditCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const LeadComplianceAuditUpdateArgsSchema: z.ZodType<Prisma.LeadComplianceAuditUpdateArgs> = z
    .object({
        select: LeadComplianceAuditSelectSchema.optional(),
        include: LeadComplianceAuditIncludeSchema.optional(),
        data: z.union([LeadComplianceAuditUpdateInputSchema, LeadComplianceAuditUncheckedUpdateInputSchema]),
        where: LeadComplianceAuditWhereUniqueInputSchema
    })
    .strict()

export default LeadComplianceAuditUpdateArgsSchema
