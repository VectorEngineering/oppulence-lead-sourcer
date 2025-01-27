import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ContractEventUncheckedCreateInputSchema: z.ZodType<Prisma.ContractEventUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        contractId: z.string(),
        type: z.string(),
        description: z.string(),
        status: z.string(),
        dueDate: z.coerce.date().optional().nullable(),
        completedAt: z.coerce.date().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable()
    })
    .strict()

export default ContractEventUncheckedCreateInputSchema
