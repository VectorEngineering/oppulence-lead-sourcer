import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'

export const ProgramListRelationFilterSchema: z.ZodType<Prisma.ProgramListRelationFilter> = z
    .object({
        every: z.lazy(() => ProgramWhereInputSchema).optional(),
        some: z.lazy(() => ProgramWhereInputSchema).optional(),
        none: z.lazy(() => ProgramWhereInputSchema).optional()
    })
    .strict()

export default ProgramListRelationFilterSchema
