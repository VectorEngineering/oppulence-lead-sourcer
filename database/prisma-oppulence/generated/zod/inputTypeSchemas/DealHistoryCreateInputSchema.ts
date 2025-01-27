import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateNestedOneWithoutHistoryInputSchema } from './DealCreateNestedOneWithoutHistoryInputSchema'

export const DealHistoryCreateInputSchema: z.ZodType<Prisma.DealHistoryCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        field: z.string(),
        oldValue: z.string().optional().nullable(),
        newValue: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable(),
        deal: z.lazy(() => DealCreateNestedOneWithoutHistoryInputSchema)
    })
    .strict()

export default DealHistoryCreateInputSchema
