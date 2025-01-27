import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadVerificationStatusSchema } from './LeadVerificationStatusSchema'

export const EnumLeadVerificationStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLeadVerificationStatusFieldUpdateOperationsInput> =
    z
        .object({
            set: z.lazy(() => LeadVerificationStatusSchema).optional()
        })
        .strict()

export default EnumLeadVerificationStatusFieldUpdateOperationsInputSchema
