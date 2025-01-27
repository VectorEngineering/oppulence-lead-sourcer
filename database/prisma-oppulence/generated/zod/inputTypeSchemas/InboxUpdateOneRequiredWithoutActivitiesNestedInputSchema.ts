import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateWithoutActivitiesInputSchema } from './InboxCreateWithoutActivitiesInputSchema'
import { InboxUncheckedCreateWithoutActivitiesInputSchema } from './InboxUncheckedCreateWithoutActivitiesInputSchema'
import { InboxCreateOrConnectWithoutActivitiesInputSchema } from './InboxCreateOrConnectWithoutActivitiesInputSchema'
import { InboxUpsertWithoutActivitiesInputSchema } from './InboxUpsertWithoutActivitiesInputSchema'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'
import { InboxUpdateToOneWithWhereWithoutActivitiesInputSchema } from './InboxUpdateToOneWithWhereWithoutActivitiesInputSchema'
import { InboxUpdateWithoutActivitiesInputSchema } from './InboxUpdateWithoutActivitiesInputSchema'
import { InboxUncheckedUpdateWithoutActivitiesInputSchema } from './InboxUncheckedUpdateWithoutActivitiesInputSchema'

export const InboxUpdateOneRequiredWithoutActivitiesNestedInputSchema: z.ZodType<Prisma.InboxUpdateOneRequiredWithoutActivitiesNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InboxCreateWithoutActivitiesInputSchema),
                    z.lazy(() => InboxUncheckedCreateWithoutActivitiesInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => InboxCreateOrConnectWithoutActivitiesInputSchema).optional(),
            upsert: z.lazy(() => InboxUpsertWithoutActivitiesInputSchema).optional(),
            connect: z.lazy(() => InboxWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => InboxUpdateToOneWithWhereWithoutActivitiesInputSchema),
                    z.lazy(() => InboxUpdateWithoutActivitiesInputSchema),
                    z.lazy(() => InboxUncheckedUpdateWithoutActivitiesInputSchema)
                ])
                .optional()
        })
        .strict()

export default InboxUpdateOneRequiredWithoutActivitiesNestedInputSchema
