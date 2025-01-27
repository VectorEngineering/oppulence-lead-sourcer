import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractArgsSchema } from '../outputTypeSchemas/ContractArgsSchema'

export const ContractEventSelectSchema: z.ZodType<Prisma.ContractEventSelect> = z
    .object({
        id: z.boolean().optional(),
        contractId: z.boolean().optional(),
        type: z.boolean().optional(),
        description: z.boolean().optional(),
        status: z.boolean().optional(),
        dueDate: z.boolean().optional(),
        completedAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        contract: z.union([z.boolean(), z.lazy(() => ContractArgsSchema)]).optional()
    })
    .strict()

export default ContractEventSelectSchema
