import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSocialProfileIncludeSchema } from '../inputTypeSchemas/LeadSocialProfileIncludeSchema'
import { LeadSocialProfileUpdateInputSchema } from '../inputTypeSchemas/LeadSocialProfileUpdateInputSchema'
import { LeadSocialProfileUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadSocialProfileUncheckedUpdateInputSchema'
import { LeadSocialProfileWhereUniqueInputSchema } from '../inputTypeSchemas/LeadSocialProfileWhereUniqueInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadSocialProfileSelectSchema: z.ZodType<Prisma.LeadSocialProfileSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        platform: z.boolean().optional(),
        profileUrl: z.boolean().optional(),
        username: z.boolean().optional(),
        lastSynced: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadSocialProfileUpdateArgsSchema: z.ZodType<Prisma.LeadSocialProfileUpdateArgs> = z
    .object({
        select: LeadSocialProfileSelectSchema.optional(),
        include: LeadSocialProfileIncludeSchema.optional(),
        data: z.union([LeadSocialProfileUpdateInputSchema, LeadSocialProfileUncheckedUpdateInputSchema]),
        where: LeadSocialProfileWhereUniqueInputSchema
    })
    .strict()

export default LeadSocialProfileUpdateArgsSchema
