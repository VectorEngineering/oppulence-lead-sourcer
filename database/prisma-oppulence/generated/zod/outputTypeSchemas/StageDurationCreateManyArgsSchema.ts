import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageDurationCreateManyInputSchema } from '../inputTypeSchemas/StageDurationCreateManyInputSchema'

export const StageDurationCreateManyArgsSchema: z.ZodType<Prisma.StageDurationCreateManyArgs> = z
    .object({
        data: z.union([StageDurationCreateManyInputSchema, StageDurationCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default StageDurationCreateManyArgsSchema
