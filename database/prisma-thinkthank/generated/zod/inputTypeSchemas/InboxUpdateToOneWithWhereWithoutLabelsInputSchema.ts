import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxWhereInputSchema } from './InboxWhereInputSchema'
import { InboxUpdateWithoutLabelsInputSchema } from './InboxUpdateWithoutLabelsInputSchema'
import { InboxUncheckedUpdateWithoutLabelsInputSchema } from './InboxUncheckedUpdateWithoutLabelsInputSchema'

export const InboxUpdateToOneWithWhereWithoutLabelsInputSchema: z.ZodType<Prisma.InboxUpdateToOneWithWhereWithoutLabelsInput> = z
    .object({
        where: z.lazy(() => InboxWhereInputSchema).optional(),
        data: z.union([z.lazy(() => InboxUpdateWithoutLabelsInputSchema), z.lazy(() => InboxUncheckedUpdateWithoutLabelsInputSchema)])
    })
    .strict()

export default InboxUpdateToOneWithWhereWithoutLabelsInputSchema
