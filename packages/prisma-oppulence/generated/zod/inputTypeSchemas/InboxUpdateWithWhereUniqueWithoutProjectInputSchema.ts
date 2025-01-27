import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxUpdateWithoutProjectInputSchema } from './InboxUpdateWithoutProjectInputSchema'
import { InboxUncheckedUpdateWithoutProjectInputSchema } from './InboxUncheckedUpdateWithoutProjectInputSchema'

export const InboxUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.InboxUpdateWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => InboxWhereUniqueInputSchema),
        data: z.union([z.lazy(() => InboxUpdateWithoutProjectInputSchema), z.lazy(() => InboxUncheckedUpdateWithoutProjectInputSchema)])
    })
    .strict()

export default InboxUpdateWithWhereUniqueWithoutProjectInputSchema
