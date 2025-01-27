import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateWithoutChildrenInputSchema } from './InboxCreateWithoutChildrenInputSchema'
import { InboxUncheckedCreateWithoutChildrenInputSchema } from './InboxUncheckedCreateWithoutChildrenInputSchema'
import { InboxCreateOrConnectWithoutChildrenInputSchema } from './InboxCreateOrConnectWithoutChildrenInputSchema'
import { InboxUpsertWithoutChildrenInputSchema } from './InboxUpsertWithoutChildrenInputSchema'
import { InboxWhereInputSchema } from './InboxWhereInputSchema'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxUpdateToOneWithWhereWithoutChildrenInputSchema } from './InboxUpdateToOneWithWhereWithoutChildrenInputSchema'
import { InboxUpdateWithoutChildrenInputSchema } from './InboxUpdateWithoutChildrenInputSchema'
import { InboxUncheckedUpdateWithoutChildrenInputSchema } from './InboxUncheckedUpdateWithoutChildrenInputSchema'

export const InboxUpdateOneWithoutChildrenNestedInputSchema: z.ZodType<Prisma.InboxUpdateOneWithoutChildrenNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => InboxCreateWithoutChildrenInputSchema), z.lazy(() => InboxUncheckedCreateWithoutChildrenInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => InboxCreateOrConnectWithoutChildrenInputSchema).optional(),
        upsert: z.lazy(() => InboxUpsertWithoutChildrenInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => InboxWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => InboxWhereInputSchema)]).optional(),
        connect: z.lazy(() => InboxWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => InboxUpdateToOneWithWhereWithoutChildrenInputSchema),
                z.lazy(() => InboxUpdateWithoutChildrenInputSchema),
                z.lazy(() => InboxUncheckedUpdateWithoutChildrenInputSchema)
            ])
            .optional()
    })
    .strict()

export default InboxUpdateOneWithoutChildrenNestedInputSchema
