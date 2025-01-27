import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramArgsSchema } from '../outputTypeSchemas/ProgramArgsSchema'

export const ProgramResourceSelectSchema: z.ZodType<Prisma.ProgramResourceSelect> = z
    .object({
        id: z.boolean().optional(),
        programId: z.boolean().optional(),
        type: z.boolean().optional(),
        name: z.boolean().optional(),
        url: z.boolean().optional(),
        size: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional()
    })
    .strict()

export default ProgramResourceSelectSchema
