import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadRequirementIncludeSchema } from '../inputTypeSchemas/LeadRequirementIncludeSchema'
import { LeadRequirementWhereUniqueInputSchema } from '../inputTypeSchemas/LeadRequirementWhereUniqueInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadRequirementSelectSchema: z.ZodType<Prisma.LeadRequirementSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        category: z.boolean().optional(),
        priority: z.boolean().optional(),
        description: z.boolean().optional(),
        status: z.boolean().optional(),
        notes: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadRequirementDeleteArgsSchema: z.ZodType<Prisma.LeadRequirementDeleteArgs> = z
    .object({
        select: LeadRequirementSelectSchema.optional(),
        include: LeadRequirementIncludeSchema.optional(),
        where: LeadRequirementWhereUniqueInputSchema
    })
    .strict()

export default LeadRequirementDeleteArgsSchema
