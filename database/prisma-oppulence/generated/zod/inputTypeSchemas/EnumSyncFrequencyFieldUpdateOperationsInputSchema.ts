import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SyncFrequencySchema } from './SyncFrequencySchema'

export const EnumSyncFrequencyFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSyncFrequencyFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => SyncFrequencySchema).optional()
    })
    .strict()

export default EnumSyncFrequencyFieldUpdateOperationsInputSchema
