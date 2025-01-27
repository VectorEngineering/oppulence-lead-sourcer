import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StorageLocationSchema } from './StorageLocationSchema'
import { NestedEnumStorageLocationWithAggregatesFilterSchema } from './NestedEnumStorageLocationWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumStorageLocationFilterSchema } from './NestedEnumStorageLocationFilterSchema'

export const EnumStorageLocationWithAggregatesFilterSchema: z.ZodType<Prisma.EnumStorageLocationWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => StorageLocationSchema).optional(),
        in: z
            .lazy(() => StorageLocationSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => StorageLocationSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => StorageLocationSchema), z.lazy(() => NestedEnumStorageLocationWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumStorageLocationFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumStorageLocationFilterSchema).optional()
    })
    .strict()

export default EnumStorageLocationWithAggregatesFilterSchema
