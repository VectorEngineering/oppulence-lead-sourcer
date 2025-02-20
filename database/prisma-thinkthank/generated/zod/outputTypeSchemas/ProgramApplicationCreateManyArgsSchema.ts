import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramApplicationCreateManyInputSchema } from '../inputTypeSchemas/ProgramApplicationCreateManyInputSchema'

export const ProgramApplicationCreateManyArgsSchema: z.ZodType<Prisma.ProgramApplicationCreateManyArgs> = z
    .object({
        data: z.union([ProgramApplicationCreateManyInputSchema, ProgramApplicationCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ProgramApplicationCreateManyArgsSchema
