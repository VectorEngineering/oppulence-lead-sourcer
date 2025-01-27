import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealHistorySelectSchema } from '../inputTypeSchemas/DealHistorySelectSchema'
import { DealHistoryIncludeSchema } from '../inputTypeSchemas/DealHistoryIncludeSchema'

export const DealHistoryArgsSchema: z.ZodType<Prisma.DealHistoryDefaultArgs> = z
    .object({
        select: z.lazy(() => DealHistorySelectSchema).optional(),
        include: z.lazy(() => DealHistoryIncludeSchema).optional()
    })
    .strict()

export default DealHistoryArgsSchema
