import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealArgsSchema } from '../outputTypeSchemas/DealArgsSchema'

export const DealHistorySelectSchema: z.ZodType<Prisma.DealHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        dealId: z.boolean().optional(),
        field: z.boolean().optional(),
        oldValue: z.boolean().optional(),
        newValue: z.boolean().optional(),
        description: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        deal: z.union([z.boolean(), z.lazy(() => DealArgsSchema)]).optional()
    })
    .strict()

export default DealHistorySelectSchema
