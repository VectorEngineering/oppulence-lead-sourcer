import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoringMethodSchema } from './LeadScoringMethodSchema'

export const EnumLeadScoringMethodFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLeadScoringMethodFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => LeadScoringMethodSchema).optional()
    })
    .strict()

export default EnumLeadScoringMethodFieldUpdateOperationsInputSchema
