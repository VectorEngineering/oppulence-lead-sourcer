import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadRiskIncludeSchema } from '../inputTypeSchemas/LeadRiskIncludeSchema'
import { LeadRiskWhereUniqueInputSchema } from '../inputTypeSchemas/LeadRiskWhereUniqueInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadRiskSelectSchema: z.ZodType<Prisma.LeadRiskSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        category: z.boolean().optional(),
        description: z.boolean().optional(),
        impact: z.boolean().optional(),
        probability: z.boolean().optional(),
        mitigation: z.boolean().optional(),
        status: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadRiskDeleteArgsSchema: z.ZodType<Prisma.LeadRiskDeleteArgs> = z
    .object({
        select: LeadRiskSelectSchema.optional(),
        include: LeadRiskIncludeSchema.optional(),
        where: LeadRiskWhereUniqueInputSchema
    })
    .strict()

export default LeadRiskDeleteArgsSchema
