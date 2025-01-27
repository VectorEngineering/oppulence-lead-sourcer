import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealArgsSchema } from '../outputTypeSchemas/DealArgsSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'

export const DealTaskSelectSchema: z.ZodType<Prisma.DealTaskSelect> = z
    .object({
        id: z.boolean().optional(),
        dealId: z.boolean().optional(),
        title: z.boolean().optional(),
        description: z.boolean().optional(),
        dueDate: z.boolean().optional(),
        priority: z.boolean().optional(),
        status: z.boolean().optional(),
        completedAt: z.boolean().optional(),
        assignedToId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        deal: z.union([z.boolean(), z.lazy(() => DealArgsSchema)]).optional(),
        assignedTo: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
    })
    .strict()

export default DealTaskSelectSchema
