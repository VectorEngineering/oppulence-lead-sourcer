import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadExternalSystemProviderSchema } from './LeadExternalSystemProviderSchema'

export const EnumLeadExternalSystemProviderFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLeadExternalSystemProviderFieldUpdateOperationsInput> =
    z
        .object({
            set: z.lazy(() => LeadExternalSystemProviderSchema).optional()
        })
        .strict()

export default EnumLeadExternalSystemProviderFieldUpdateOperationsInputSchema
