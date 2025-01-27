import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadDecisionMakerIncludeSchema } from '../inputTypeSchemas/LeadDecisionMakerIncludeSchema'
import { LeadDecisionMakerWhereUniqueInputSchema } from '../inputTypeSchemas/LeadDecisionMakerWhereUniqueInputSchema'
import { LeadDecisionMakerCreateInputSchema } from '../inputTypeSchemas/LeadDecisionMakerCreateInputSchema'
import { LeadDecisionMakerUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadDecisionMakerUncheckedCreateInputSchema'
import { LeadDecisionMakerUpdateInputSchema } from '../inputTypeSchemas/LeadDecisionMakerUpdateInputSchema'
import { LeadDecisionMakerUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadDecisionMakerUncheckedUpdateInputSchema'
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

export const LeadDecisionMakerUpsertArgsSchema: z.ZodType<Prisma.LeadDecisionMakerUpsertArgs> = z
    .object({
        select: LeadDecisionMakerSelectSchema.optional(),
        include: LeadDecisionMakerIncludeSchema.optional(),
        where: LeadDecisionMakerWhereUniqueInputSchema,
        create: z.union([LeadDecisionMakerCreateInputSchema, LeadDecisionMakerUncheckedCreateInputSchema]),
        update: z.union([LeadDecisionMakerUpdateInputSchema, LeadDecisionMakerUncheckedUpdateInputSchema])
    })
    .strict()

export default LeadDecisionMakerUpsertArgsSchema
