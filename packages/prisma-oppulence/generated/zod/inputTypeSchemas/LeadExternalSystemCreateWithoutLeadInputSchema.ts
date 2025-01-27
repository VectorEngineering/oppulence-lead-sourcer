import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadExternalSystemProviderSchema } from './LeadExternalSystemProviderSchema'

export const LeadExternalSystemCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadExternalSystemCreateWithoutLeadInput> = z
    .object({
        id: z.string().cuid().optional(),
        provider: z.lazy(() => LeadExternalSystemProviderSchema),
        externalId: z.string(),
        lastSynced: z.coerce.date(),
        syncStatus: z.string(),
        errorMessage: z.string().optional().nullable()
    })
    .strict()

export default LeadExternalSystemCreateWithoutLeadInputSchema
