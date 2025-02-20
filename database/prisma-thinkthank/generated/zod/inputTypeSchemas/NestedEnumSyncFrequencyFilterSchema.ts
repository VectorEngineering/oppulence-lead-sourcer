import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SyncFrequencySchema } from './SyncFrequencySchema'

export const NestedEnumSyncFrequencyFilterSchema: z.ZodType<Prisma.NestedEnumSyncFrequencyFilter> = z
    .object({
        equals: z.lazy(() => SyncFrequencySchema).optional(),
        in: z
            .lazy(() => SyncFrequencySchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => SyncFrequencySchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => SyncFrequencySchema), z.lazy(() => NestedEnumSyncFrequencyFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumSyncFrequencyFilterSchema
