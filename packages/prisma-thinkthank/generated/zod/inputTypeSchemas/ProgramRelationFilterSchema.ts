import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'

export const ProgramRelationFilterSchema: z.ZodType<Prisma.ProgramRelationFilter> = z
    .object({
        is: z.lazy(() => ProgramWhereInputSchema).optional(),
        isNot: z.lazy(() => ProgramWhereInputSchema).optional()
    })
    .strict()

export default ProgramRelationFilterSchema
