import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractCreateNestedOneWithoutContractEventsInputSchema } from './ContractCreateNestedOneWithoutContractEventsInputSchema'

export const ContractEventCreateInputSchema: z.ZodType<Prisma.ContractEventCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        type: z.string(),
        description: z.string(),
        status: z.string(),
        dueDate: z.coerce.date().optional().nullable(),
        completedAt: z.coerce.date().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable(),
        contract: z.lazy(() => ContractCreateNestedOneWithoutContractEventsInputSchema)
    })
    .strict()

export default ContractEventCreateInputSchema
