import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadComplianceHistoryIncludeSchema } from '../inputTypeSchemas/LeadComplianceHistoryIncludeSchema'
import { LeadComplianceHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryWhereUniqueInputSchema'
import { LeadComplianceHistoryCreateInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryCreateInputSchema'
import { LeadComplianceHistoryUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryUncheckedCreateInputSchema'
import { LeadComplianceHistoryUpdateInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryUpdateInputSchema'
import { LeadComplianceHistoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadComplianceHistoryUncheckedUpdateInputSchema'
import { LeadComplianceAuditArgsSchema } from './LeadComplianceAuditArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadComplianceHistorySelectSchema: z.ZodType<Prisma.LeadComplianceHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        complianceAuditId: z.boolean().optional(),
        action: z.boolean().optional(),
        status: z.boolean().optional(),
        notes: z.boolean().optional(),
        performedBy: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        complianceAudit: z.union([z.boolean(), z.lazy(() => LeadComplianceAuditArgsSchema)]).optional()
    })
    .strict()

export const LeadComplianceHistoryUpsertArgsSchema: z.ZodType<Prisma.LeadComplianceHistoryUpsertArgs> = z
    .object({
        select: LeadComplianceHistorySelectSchema.optional(),
        include: LeadComplianceHistoryIncludeSchema.optional(),
        where: LeadComplianceHistoryWhereUniqueInputSchema,
        create: z.union([LeadComplianceHistoryCreateInputSchema, LeadComplianceHistoryUncheckedCreateInputSchema]),
        update: z.union([LeadComplianceHistoryUpdateInputSchema, LeadComplianceHistoryUncheckedUpdateInputSchema])
    })
    .strict()

export default LeadComplianceHistoryUpsertArgsSchema
