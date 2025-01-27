import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramTypeSchema } from './ProgramTypeSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumProgramTypeFilterSchema } from './NestedEnumProgramTypeFilterSchema'

export const NestedEnumProgramTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumProgramTypeWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => ProgramTypeSchema).optional(),
        in: z
            .lazy(() => ProgramTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => ProgramTypeSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => ProgramTypeSchema), z.lazy(() => NestedEnumProgramTypeWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumProgramTypeFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumProgramTypeFilterSchema).optional()
    })
    .strict()

export default NestedEnumProgramTypeWithAggregatesFilterSchema
