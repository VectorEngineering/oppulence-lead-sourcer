import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadExternalSystemProviderSchema } from './LeadExternalSystemProviderSchema'

export const LeadExternalSystemLeadIdProviderCompoundUniqueInputSchema: z.ZodType<Prisma.LeadExternalSystemLeadIdProviderCompoundUniqueInput> =
    z
        .object({
            leadId: z.string(),
            provider: z.lazy(() => LeadExternalSystemProviderSchema)
        })
        .strict()

export default LeadExternalSystemLeadIdProviderCompoundUniqueInputSchema
