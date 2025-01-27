import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealArgsSchema } from '../outputTypeSchemas/DealArgsSchema'

export const DealCompetitorIncludeSchema: z.ZodType<Prisma.DealCompetitorInclude> = z
    .object({
        deal: z.union([z.boolean(), z.lazy(() => DealArgsSchema)]).optional()
    })
    .strict()

export default DealCompetitorIncludeSchema
