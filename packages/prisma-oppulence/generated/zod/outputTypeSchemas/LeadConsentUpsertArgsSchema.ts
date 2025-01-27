import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadConsentIncludeSchema } from '../inputTypeSchemas/LeadConsentIncludeSchema'
import { LeadConsentWhereUniqueInputSchema } from '../inputTypeSchemas/LeadConsentWhereUniqueInputSchema'
import { LeadConsentCreateInputSchema } from '../inputTypeSchemas/LeadConsentCreateInputSchema'
import { LeadConsentUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadConsentUncheckedCreateInputSchema'
import { LeadConsentUpdateInputSchema } from '../inputTypeSchemas/LeadConsentUpdateInputSchema'
import { LeadConsentUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadConsentUncheckedUpdateInputSchema'
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

export const LeadConsentUpsertArgsSchema: z.ZodType<Prisma.LeadConsentUpsertArgs> = z
    .object({
        select: LeadConsentSelectSchema.optional(),
        include: LeadConsentIncludeSchema.optional(),
        where: LeadConsentWhereUniqueInputSchema,
        create: z.union([LeadConsentCreateInputSchema, LeadConsentUncheckedCreateInputSchema]),
        update: z.union([LeadConsentUpdateInputSchema, LeadConsentUncheckedUpdateInputSchema])
    })
    .strict()

export default LeadConsentUpsertArgsSchema
