import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramResourceWhereInputSchema } from '../inputTypeSchemas/ProgramResourceWhereInputSchema'

export const ProgramResourceDeleteManyArgsSchema: z.ZodType<Prisma.ProgramResourceDeleteManyArgs> = z
    .object({
        where: ProgramResourceWhereInputSchema.optional()
    })
    .strict()

export default ProgramResourceDeleteManyArgsSchema
