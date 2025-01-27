import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const WorkspaceMemberCreateManyWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceMemberCreateManyWorkspaceInput> = z
    .object({
        id: z.string().cuid().optional(),
        userId: z.string(),
        role: z.string().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default WorkspaceMemberCreateManyWorkspaceInputSchema
