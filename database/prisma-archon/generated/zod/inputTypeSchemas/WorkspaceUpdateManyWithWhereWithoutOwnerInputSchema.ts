import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceScalarWhereInputSchema } from './WorkspaceScalarWhereInputSchema'
import { WorkspaceUpdateManyMutationInputSchema } from './WorkspaceUpdateManyMutationInputSchema'
import { WorkspaceUncheckedUpdateManyWithoutOwnerInputSchema } from './WorkspaceUncheckedUpdateManyWithoutOwnerInputSchema'

export const WorkspaceUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.WorkspaceUpdateManyWithWhereWithoutOwnerInput> = z
    .object({
        where: z.lazy(() => WorkspaceScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => WorkspaceUpdateManyMutationInputSchema),
            z.lazy(() => WorkspaceUncheckedUpdateManyWithoutOwnerInputSchema)
        ])
    })
    .strict()

export default WorkspaceUpdateManyWithWhereWithoutOwnerInputSchema
