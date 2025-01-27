import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceMemberUncheckedCreateWithoutWorkspaceInput> =
    z
        .object({
            id: z.string().cuid().optional(),
            userId: z.string(),
            role: z.string().optional(),
            createdAt: z.coerce.date().optional(),
            updatedAt: z.coerce.date().optional()
        })
        .strict()

export default WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema
