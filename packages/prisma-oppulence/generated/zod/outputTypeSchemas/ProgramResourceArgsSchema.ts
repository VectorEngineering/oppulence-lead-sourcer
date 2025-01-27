import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramResourceSelectSchema } from '../inputTypeSchemas/ProgramResourceSelectSchema'
import { ProgramResourceIncludeSchema } from '../inputTypeSchemas/ProgramResourceIncludeSchema'

export const ProgramResourceArgsSchema: z.ZodType<Prisma.ProgramResourceDefaultArgs> = z
    .object({
        select: z.lazy(() => ProgramResourceSelectSchema).optional(),
        include: z.lazy(() => ProgramResourceIncludeSchema).optional()
    })
    .strict()

export default ProgramResourceArgsSchema
