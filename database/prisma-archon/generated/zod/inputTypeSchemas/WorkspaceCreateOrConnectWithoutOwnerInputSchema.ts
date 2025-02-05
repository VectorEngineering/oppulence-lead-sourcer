import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema'
import { WorkspaceCreateWithoutOwnerInputSchema } from './WorkspaceCreateWithoutOwnerInputSchema'
import { WorkspaceUncheckedCreateWithoutOwnerInputSchema } from './WorkspaceUncheckedCreateWithoutOwnerInputSchema'

export const WorkspaceCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutOwnerInput> = z
    .object({
        where: z.lazy(() => WorkspaceWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => WorkspaceCreateWithoutOwnerInputSchema),
            z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputSchema)
        ])
    })
    .strict()

export default WorkspaceCreateOrConnectWithoutOwnerInputSchema
