import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateWithoutSharesInputSchema } from './InboxCreateWithoutSharesInputSchema'
import { InboxUncheckedCreateWithoutSharesInputSchema } from './InboxUncheckedCreateWithoutSharesInputSchema'
import { InboxCreateOrConnectWithoutSharesInputSchema } from './InboxCreateOrConnectWithoutSharesInputSchema'
import { InboxUpsertWithoutSharesInputSchema } from './InboxUpsertWithoutSharesInputSchema'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxUpdateToOneWithWhereWithoutSharesInputSchema } from './InboxUpdateToOneWithWhereWithoutSharesInputSchema'
import { InboxUpdateWithoutSharesInputSchema } from './InboxUpdateWithoutSharesInputSchema'
import { InboxUncheckedUpdateWithoutSharesInputSchema } from './InboxUncheckedUpdateWithoutSharesInputSchema'

export const InboxUpdateOneRequiredWithoutSharesNestedInputSchema: z.ZodType<Prisma.InboxUpdateOneRequiredWithoutSharesNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => InboxCreateWithoutSharesInputSchema), z.lazy(() => InboxUncheckedCreateWithoutSharesInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => InboxCreateOrConnectWithoutSharesInputSchema).optional(),
        upsert: z.lazy(() => InboxUpsertWithoutSharesInputSchema).optional(),
        connect: z.lazy(() => InboxWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => InboxUpdateToOneWithWhereWithoutSharesInputSchema),
                z.lazy(() => InboxUpdateWithoutSharesInputSchema),
                z.lazy(() => InboxUncheckedUpdateWithoutSharesInputSchema)
            ])
            .optional()
    })
    .strict()

export default InboxUpdateOneRequiredWithoutSharesNestedInputSchema
