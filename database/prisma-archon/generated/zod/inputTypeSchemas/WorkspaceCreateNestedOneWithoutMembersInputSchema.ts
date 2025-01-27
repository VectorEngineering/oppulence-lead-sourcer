import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceCreateWithoutMembersInputSchema } from './WorkspaceCreateWithoutMembersInputSchema'
import { WorkspaceUncheckedCreateWithoutMembersInputSchema } from './WorkspaceUncheckedCreateWithoutMembersInputSchema'
import { WorkspaceCreateOrConnectWithoutMembersInputSchema } from './WorkspaceCreateOrConnectWithoutMembersInputSchema'
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema'

export const WorkspaceCreateNestedOneWithoutMembersInputSchema: z.ZodType<Prisma.WorkspaceCreateNestedOneWithoutMembersInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => WorkspaceCreateWithoutMembersInputSchema),
                z.lazy(() => WorkspaceUncheckedCreateWithoutMembersInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutMembersInputSchema).optional(),
        connect: z.lazy(() => WorkspaceWhereUniqueInputSchema).optional()
    })
    .strict()

export default WorkspaceCreateNestedOneWithoutMembersInputSchema
