import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramSelectSchema } from '../inputTypeSchemas/ProgramSelectSchema'
import { ProgramIncludeSchema } from '../inputTypeSchemas/ProgramIncludeSchema'

export const ProgramArgsSchema: z.ZodType<Prisma.ProgramDefaultArgs> = z
    .object({
        select: z.lazy(() => ProgramSelectSchema).optional(),
        include: z.lazy(() => ProgramIncludeSchema).optional()
    })
    .strict()

export default ProgramArgsSchema
