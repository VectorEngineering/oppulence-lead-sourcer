import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadComplianceAuditIncludeSchema } from '../inputTypeSchemas/LeadComplianceAuditIncludeSchema'
import { LeadComplianceAuditWhereInputSchema } from '../inputTypeSchemas/LeadComplianceAuditWhereInputSchema'
import { LeadComplianceAuditOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadComplianceAuditOrderByWithRelationInputSchema'
import { LeadComplianceAuditWhereUniqueInputSchema } from '../inputTypeSchemas/LeadComplianceAuditWhereUniqueInputSchema'
import { LeadComplianceAuditScalarFieldEnumSchema } from '../inputTypeSchemas/LeadComplianceAuditScalarFieldEnumSchema'
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

export const LeadComplianceAuditFindFirstArgsSchema: z.ZodType<Prisma.LeadComplianceAuditFindFirstArgs> = z
    .object({
        select: LeadComplianceAuditSelectSchema.optional(),
        include: LeadComplianceAuditIncludeSchema.optional(),
        where: LeadComplianceAuditWhereInputSchema.optional(),
        orderBy: z
            .union([LeadComplianceAuditOrderByWithRelationInputSchema.array(), LeadComplianceAuditOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadComplianceAuditWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LeadComplianceAuditScalarFieldEnumSchema, LeadComplianceAuditScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LeadComplianceAuditFindFirstArgsSchema
