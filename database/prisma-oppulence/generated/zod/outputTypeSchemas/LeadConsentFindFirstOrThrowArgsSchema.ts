import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadConsentIncludeSchema } from '../inputTypeSchemas/LeadConsentIncludeSchema'
import { LeadConsentWhereInputSchema } from '../inputTypeSchemas/LeadConsentWhereInputSchema'
import { LeadConsentOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadConsentOrderByWithRelationInputSchema'
import { LeadConsentWhereUniqueInputSchema } from '../inputTypeSchemas/LeadConsentWhereUniqueInputSchema'
import { LeadConsentScalarFieldEnumSchema } from '../inputTypeSchemas/LeadConsentScalarFieldEnumSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadConsentSelectSchema: z.ZodType<Prisma.LeadConsentSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        type: z.boolean().optional(),
        status: z.boolean().optional(),
        source: z.boolean().optional(),
        ipAddress: z.boolean().optional(),
        timestamp: z.boolean().optional(),
        expiryDate: z.boolean().optional(),
        document: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadConsentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LeadConsentFindFirstOrThrowArgs> = z
    .object({
        select: LeadConsentSelectSchema.optional(),
        include: LeadConsentIncludeSchema.optional(),
        where: LeadConsentWhereInputSchema.optional(),
        orderBy: z.union([LeadConsentOrderByWithRelationInputSchema.array(), LeadConsentOrderByWithRelationInputSchema]).optional(),
        cursor: LeadConsentWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LeadConsentScalarFieldEnumSchema, LeadConsentScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LeadConsentFindFirstOrThrowArgsSchema
