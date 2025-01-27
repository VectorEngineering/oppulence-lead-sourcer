import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'

export const ProgramNullableRelationFilterSchema: z.ZodType<Prisma.ProgramNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => ProgramWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => ProgramWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default ProgramNullableRelationFilterSchema
