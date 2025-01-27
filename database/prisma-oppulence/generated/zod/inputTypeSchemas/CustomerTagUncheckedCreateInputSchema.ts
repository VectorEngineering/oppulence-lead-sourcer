import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const CustomerTagUncheckedCreateInputSchema: z.ZodType<Prisma.CustomerTagUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        customerId: z.string(),
        tagId: z.string(),
        projectId: z.string()
    })
    .strict()

export default CustomerTagUncheckedCreateInputSchema
