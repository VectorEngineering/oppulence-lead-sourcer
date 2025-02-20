import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema'
import { WorkspaceUpdateWithoutOwnerInputSchema } from './WorkspaceUpdateWithoutOwnerInputSchema'
import { WorkspaceUncheckedUpdateWithoutOwnerInputSchema } from './WorkspaceUncheckedUpdateWithoutOwnerInputSchema'

export const WorkspaceUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.WorkspaceUpdateWithWhereUniqueWithoutOwnerInput> = z
    .object({
        where: z.lazy(() => WorkspaceWhereUniqueInputSchema),
        data: z.union([z.lazy(() => WorkspaceUpdateWithoutOwnerInputSchema), z.lazy(() => WorkspaceUncheckedUpdateWithoutOwnerInputSchema)])
    })
    .strict()

export default WorkspaceUpdateWithWhereUniqueWithoutOwnerInputSchema
