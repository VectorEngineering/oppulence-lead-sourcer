import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageDurationWhereInputSchema } from '../inputTypeSchemas/StageDurationWhereInputSchema'

export const StageDurationDeleteManyArgsSchema: z.ZodType<Prisma.StageDurationDeleteManyArgs> = z
    .object({
        where: StageDurationWhereInputSchema.optional()
    })
    .strict()

export default StageDurationDeleteManyArgsSchema
