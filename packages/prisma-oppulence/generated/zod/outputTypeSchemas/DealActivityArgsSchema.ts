import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealActivitySelectSchema } from '../inputTypeSchemas/DealActivitySelectSchema'
import { DealActivityIncludeSchema } from '../inputTypeSchemas/DealActivityIncludeSchema'

export const DealActivityArgsSchema: z.ZodType<Prisma.DealActivityDefaultArgs> = z
    .object({
        select: z.lazy(() => DealActivitySelectSchema).optional(),
        include: z.lazy(() => DealActivityIncludeSchema).optional()
    })
    .strict()

export default DealActivityArgsSchema
