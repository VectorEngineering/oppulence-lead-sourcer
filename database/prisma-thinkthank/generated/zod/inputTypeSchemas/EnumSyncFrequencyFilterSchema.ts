import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SyncFrequencySchema } from './SyncFrequencySchema'
import { NestedEnumSyncFrequencyFilterSchema } from './NestedEnumSyncFrequencyFilterSchema'

export const EnumSyncFrequencyFilterSchema: z.ZodType<Prisma.EnumSyncFrequencyFilter> = z
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

export default EnumSyncFrequencyFilterSchema
