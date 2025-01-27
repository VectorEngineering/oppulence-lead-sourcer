import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadConsentUncheckedCreateInputSchema: z.ZodType<Prisma.LeadConsentUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        leadId: z.string(),
        type: z.string(),
        status: z.boolean(),
        source: z.string(),
        ipAddress: z.string().optional().nullable(),
        timestamp: z.coerce.date(),
        expiryDate: z.coerce.date().optional().nullable(),
        document: z.string().optional().nullable()
    })
    .strict()

export default LeadConsentUncheckedCreateInputSchema
