import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadDecisionMakerIncludeSchema } from '../inputTypeSchemas/LeadDecisionMakerIncludeSchema'
import { LeadDecisionMakerWhereUniqueInputSchema } from '../inputTypeSchemas/LeadDecisionMakerWhereUniqueInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadDecisionMakerSelectSchema: z.ZodType<Prisma.LeadDecisionMakerSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        name: z.boolean().optional(),
        title: z.boolean().optional(),
        email: z.boolean().optional(),
        phone: z.boolean().optional(),
        influence: z.boolean().optional(),
        notes: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadDecisionMakerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LeadDecisionMakerFindUniqueOrThrowArgs> = z
    .object({
        select: LeadDecisionMakerSelectSchema.optional(),
        include: LeadDecisionMakerIncludeSchema.optional(),
        where: LeadDecisionMakerWhereUniqueInputSchema
    })
    .strict()

export default LeadDecisionMakerFindUniqueOrThrowArgsSchema
