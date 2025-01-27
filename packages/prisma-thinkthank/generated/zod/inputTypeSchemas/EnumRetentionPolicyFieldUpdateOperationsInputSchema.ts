import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RetentionPolicySchema } from './RetentionPolicySchema'

export const EnumRetentionPolicyFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRetentionPolicyFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => RetentionPolicySchema).optional()
    })
    .strict()

export default EnumRetentionPolicyFieldUpdateOperationsInputSchema
