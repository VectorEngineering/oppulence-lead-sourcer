import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ProgramApplicationCreateManyProgramInputSchema: z.ZodType<Prisma.ProgramApplicationCreateManyProgramInput> = z
    .object({
        id: z.string().cuid().optional(),
        partnerId: z.string().optional().nullable(),
        name: z.string(),
        email: z.string(),
        proposal: z.string().optional().nullable(),
        website: z.string().optional().nullable(),
        comments: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default ProgramApplicationCreateManyProgramInputSchema
