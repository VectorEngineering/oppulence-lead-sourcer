import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ProgramApplicationCreateManyPartnerInputSchema: z.ZodType<Prisma.ProgramApplicationCreateManyPartnerInput> = z
    .object({
        id: z.string().cuid().optional(),
        programId: z.string(),
        name: z.string(),
        email: z.string(),
        proposal: z.string().optional().nullable(),
        website: z.string().optional().nullable(),
        comments: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default ProgramApplicationCreateManyPartnerInputSchema
