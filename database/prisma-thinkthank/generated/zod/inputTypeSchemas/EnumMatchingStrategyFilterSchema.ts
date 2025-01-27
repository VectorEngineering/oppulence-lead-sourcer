import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { MatchingStrategySchema } from './MatchingStrategySchema'
import { NestedEnumMatchingStrategyFilterSchema } from './NestedEnumMatchingStrategyFilterSchema'

export const EnumMatchingStrategyFilterSchema: z.ZodType<Prisma.EnumMatchingStrategyFilter> = z
    .object({
        equals: z.lazy(() => MatchingStrategySchema).optional(),
        in: z
            .lazy(() => MatchingStrategySchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => MatchingStrategySchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => MatchingStrategySchema), z.lazy(() => NestedEnumMatchingStrategyFilterSchema)]).optional()
    })
    .strict()

export default EnumMatchingStrategyFilterSchema
