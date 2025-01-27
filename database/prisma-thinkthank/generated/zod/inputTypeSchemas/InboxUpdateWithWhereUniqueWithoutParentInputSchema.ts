import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxUpdateWithoutParentInputSchema } from './InboxUpdateWithoutParentInputSchema'
import { InboxUncheckedUpdateWithoutParentInputSchema } from './InboxUncheckedUpdateWithoutParentInputSchema'

export const InboxUpdateWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.InboxUpdateWithWhereUniqueWithoutParentInput> = z
    .object({
        where: z.lazy(() => InboxWhereUniqueInputSchema),
        data: z.union([z.lazy(() => InboxUpdateWithoutParentInputSchema), z.lazy(() => InboxUncheckedUpdateWithoutParentInputSchema)])
    })
    .strict()

export default InboxUpdateWithWhereUniqueWithoutParentInputSchema
