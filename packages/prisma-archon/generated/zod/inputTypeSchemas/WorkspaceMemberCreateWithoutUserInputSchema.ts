import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceCreateNestedOneWithoutMembersInputSchema } from './WorkspaceCreateNestedOneWithoutMembersInputSchema'

export const WorkspaceMemberCreateWithoutUserInputSchema: z.ZodType<Prisma.WorkspaceMemberCreateWithoutUserInput> = z
    .object({
        id: z.string().cuid().optional(),
        role: z.string().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutMembersInputSchema)
    })
    .strict()

export default WorkspaceMemberCreateWithoutUserInputSchema
