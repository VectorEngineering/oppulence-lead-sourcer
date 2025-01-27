import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramCreateManyInputSchema } from '../inputTypeSchemas/ProgramCreateManyInputSchema'

export const ProgramCreateManyArgsSchema: z.ZodType<Prisma.ProgramCreateManyArgs> = z
    .object({
        data: z.union([ProgramCreateManyInputSchema, ProgramCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ProgramCreateManyArgsSchema
