import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { FeedbackStatusSchema } from './FeedbackStatusSchema'

export const EnumFeedbackStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumFeedbackStatusFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => FeedbackStatusSchema).optional()
    })
    .strict()

export default EnumFeedbackStatusFieldUpdateOperationsInputSchema
