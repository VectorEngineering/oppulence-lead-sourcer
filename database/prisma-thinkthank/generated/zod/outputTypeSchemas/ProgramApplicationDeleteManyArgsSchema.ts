import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramApplicationWhereInputSchema } from '../inputTypeSchemas/ProgramApplicationWhereInputSchema'

export const ProgramApplicationDeleteManyArgsSchema: z.ZodType<Prisma.ProgramApplicationDeleteManyArgs> = z
    .object({
        where: ProgramApplicationWhereInputSchema.optional()
    })
    .strict()

export default ProgramApplicationDeleteManyArgsSchema
