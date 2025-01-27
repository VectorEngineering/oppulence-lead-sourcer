import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const WorkspaceCreateManyOwnerInputSchema: z.ZodType<Prisma.WorkspaceCreateManyOwnerInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        description: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default WorkspaceCreateManyOwnerInputSchema
