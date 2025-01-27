import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSocialProfileIncludeSchema } from '../inputTypeSchemas/LeadSocialProfileIncludeSchema'
import { LeadSocialProfileWhereInputSchema } from '../inputTypeSchemas/LeadSocialProfileWhereInputSchema'
import { LeadSocialProfileOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadSocialProfileOrderByWithRelationInputSchema'
import { LeadSocialProfileWhereUniqueInputSchema } from '../inputTypeSchemas/LeadSocialProfileWhereUniqueInputSchema'
import { LeadSocialProfileScalarFieldEnumSchema } from '../inputTypeSchemas/LeadSocialProfileScalarFieldEnumSchema'
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

export const LeadSocialProfileFindFirstArgsSchema: z.ZodType<Prisma.LeadSocialProfileFindFirstArgs> = z
    .object({
        select: LeadSocialProfileSelectSchema.optional(),
        include: LeadSocialProfileIncludeSchema.optional(),
        where: LeadSocialProfileWhereInputSchema.optional(),
        orderBy: z
            .union([LeadSocialProfileOrderByWithRelationInputSchema.array(), LeadSocialProfileOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadSocialProfileWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LeadSocialProfileScalarFieldEnumSchema, LeadSocialProfileScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LeadSocialProfileFindFirstArgsSchema
