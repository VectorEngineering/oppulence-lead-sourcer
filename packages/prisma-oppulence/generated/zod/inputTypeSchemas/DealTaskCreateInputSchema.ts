import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskPrioritySchema } from './DealTaskPrioritySchema'
import { DealTaskStatusSchema } from './DealTaskStatusSchema'
import { DealCreateNestedOneWithoutTasksInputSchema } from './DealCreateNestedOneWithoutTasksInputSchema'
import { UserCreateNestedOneWithoutDealTaskInputSchema } from './UserCreateNestedOneWithoutDealTaskInputSchema'

export const DealTaskCreateInputSchema: z.ZodType<Prisma.DealTaskCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        title: z.string(),
        description: z.string().optional().nullable(),
        dueDate: z.coerce.date().optional().nullable(),
        priority: z
            .lazy(() => DealTaskPrioritySchema)
            .optional()
            .nullable(),
        status: z.lazy(() => DealTaskStatusSchema).optional(),
        completedAt: z.coerce.date().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        deal: z.lazy(() => DealCreateNestedOneWithoutTasksInputSchema),
        assignedTo: z.lazy(() => UserCreateNestedOneWithoutDealTaskInputSchema).optional()
    })
    .strict()

export default DealTaskCreateInputSchema
