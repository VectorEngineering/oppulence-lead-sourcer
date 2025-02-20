import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxWhereInputSchema } from './InboxWhereInputSchema'
import { InboxUpdateWithoutChildrenInputSchema } from './InboxUpdateWithoutChildrenInputSchema'
import { InboxUncheckedUpdateWithoutChildrenInputSchema } from './InboxUncheckedUpdateWithoutChildrenInputSchema'

export const InboxUpdateToOneWithWhereWithoutChildrenInputSchema: z.ZodType<Prisma.InboxUpdateToOneWithWhereWithoutChildrenInput> = z
    .object({
        where: z.lazy(() => InboxWhereInputSchema).optional(),
        data: z.union([z.lazy(() => InboxUpdateWithoutChildrenInputSchema), z.lazy(() => InboxUncheckedUpdateWithoutChildrenInputSchema)])
    })
    .strict()

export default InboxUpdateToOneWithWhereWithoutChildrenInputSchema
