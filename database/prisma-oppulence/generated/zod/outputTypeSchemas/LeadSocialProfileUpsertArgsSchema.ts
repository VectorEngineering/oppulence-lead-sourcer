import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSocialProfileIncludeSchema } from '../inputTypeSchemas/LeadSocialProfileIncludeSchema'
import { LeadSocialProfileWhereUniqueInputSchema } from '../inputTypeSchemas/LeadSocialProfileWhereUniqueInputSchema'
import { LeadSocialProfileCreateInputSchema } from '../inputTypeSchemas/LeadSocialProfileCreateInputSchema'
import { LeadSocialProfileUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadSocialProfileUncheckedCreateInputSchema'
import { LeadSocialProfileUpdateInputSchema } from '../inputTypeSchemas/LeadSocialProfileUpdateInputSchema'
import { LeadSocialProfileUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadSocialProfileUncheckedUpdateInputSchema'
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

export const LeadSocialProfileUpsertArgsSchema: z.ZodType<Prisma.LeadSocialProfileUpsertArgs> = z
    .object({
        select: LeadSocialProfileSelectSchema.optional(),
        include: LeadSocialProfileIncludeSchema.optional(),
        where: LeadSocialProfileWhereUniqueInputSchema,
        create: z.union([LeadSocialProfileCreateInputSchema, LeadSocialProfileUncheckedCreateInputSchema]),
        update: z.union([LeadSocialProfileUpdateInputSchema, LeadSocialProfileUncheckedUpdateInputSchema])
    })
    .strict()

export default LeadSocialProfileUpsertArgsSchema
