import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxUpdateWithoutActivitiesInputSchema } from './InboxUpdateWithoutActivitiesInputSchema'
import { InboxUncheckedUpdateWithoutActivitiesInputSchema } from './InboxUncheckedUpdateWithoutActivitiesInputSchema'
import { InboxCreateWithoutActivitiesInputSchema } from './InboxCreateWithoutActivitiesInputSchema'
import { InboxUncheckedCreateWithoutActivitiesInputSchema } from './InboxUncheckedCreateWithoutActivitiesInputSchema'
import { InboxWhereInputSchema } from './InboxWhereInputSchema'

export const InboxUpsertWithoutActivitiesInputSchema: z.ZodType<Prisma.InboxUpsertWithoutActivitiesInput> = z
    .object({
        update: z.union([
            z.lazy(() => InboxUpdateWithoutActivitiesInputSchema),
            z.lazy(() => InboxUncheckedUpdateWithoutActivitiesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => InboxCreateWithoutActivitiesInputSchema),
            z.lazy(() => InboxUncheckedCreateWithoutActivitiesInputSchema)
        ]),
        where: z.lazy(() => InboxWhereInputSchema).optional()
    })
    .strict()

export default InboxUpsertWithoutActivitiesInputSchema
