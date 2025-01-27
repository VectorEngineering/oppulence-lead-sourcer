import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadConsentIncludeSchema } from '../inputTypeSchemas/LeadConsentIncludeSchema'
import { LeadConsentUpdateInputSchema } from '../inputTypeSchemas/LeadConsentUpdateInputSchema'
import { LeadConsentUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadConsentUncheckedUpdateInputSchema'
import { LeadConsentWhereUniqueInputSchema } from '../inputTypeSchemas/LeadConsentWhereUniqueInputSchema'
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

export const LeadConsentUpdateArgsSchema: z.ZodType<Prisma.LeadConsentUpdateArgs> = z
    .object({
        select: LeadConsentSelectSchema.optional(),
        include: LeadConsentIncludeSchema.optional(),
        data: z.union([LeadConsentUpdateInputSchema, LeadConsentUncheckedUpdateInputSchema]),
        where: LeadConsentWhereUniqueInputSchema
    })
    .strict()

export default LeadConsentUpdateArgsSchema
