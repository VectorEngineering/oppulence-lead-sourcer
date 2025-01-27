import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskPrioritySchema } from './DealTaskPrioritySchema'
import { DealTaskStatusSchema } from './DealTaskStatusSchema'

export const DealTaskCreateManyInputSchema: z.ZodType<Prisma.DealTaskCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        dealId: z.string(),
        title: z.string(),
        description: z.string().optional().nullable(),
        dueDate: z.coerce.date().optional().nullable(),
        priority: z
            .lazy(() => DealTaskPrioritySchema)
            .optional()
            .nullable(),
        status: z.lazy(() => DealTaskStatusSchema).optional(),
        completedAt: z.coerce.date().optional().nullable(),
        assignedToId: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default DealTaskCreateManyInputSchema
