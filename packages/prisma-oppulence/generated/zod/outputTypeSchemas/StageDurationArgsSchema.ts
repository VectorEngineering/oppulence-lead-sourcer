import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageDurationSelectSchema } from '../inputTypeSchemas/StageDurationSelectSchema'
import { StageDurationIncludeSchema } from '../inputTypeSchemas/StageDurationIncludeSchema'

export const StageDurationArgsSchema: z.ZodType<Prisma.StageDurationDefaultArgs> = z
    .object({
        select: z.lazy(() => StageDurationSelectSchema).optional(),
        include: z.lazy(() => StageDurationIncludeSchema).optional()
    })
    .strict()

export default StageDurationArgsSchema
