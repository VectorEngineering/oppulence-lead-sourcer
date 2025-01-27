import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramWhereInputSchema } from '../inputTypeSchemas/ProgramWhereInputSchema'

export const ProgramDeleteManyArgsSchema: z.ZodType<Prisma.ProgramDeleteManyArgs> = z
    .object({
        where: ProgramWhereInputSchema.optional()
    })
    .strict()

export default ProgramDeleteManyArgsSchema
