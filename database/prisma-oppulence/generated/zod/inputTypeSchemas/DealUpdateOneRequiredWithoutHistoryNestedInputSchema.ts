import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateWithoutHistoryInputSchema } from './DealCreateWithoutHistoryInputSchema'
import { DealUncheckedCreateWithoutHistoryInputSchema } from './DealUncheckedCreateWithoutHistoryInputSchema'
import { DealCreateOrConnectWithoutHistoryInputSchema } from './DealCreateOrConnectWithoutHistoryInputSchema'
import { DealUpsertWithoutHistoryInputSchema } from './DealUpsertWithoutHistoryInputSchema'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateToOneWithWhereWithoutHistoryInputSchema } from './DealUpdateToOneWithWhereWithoutHistoryInputSchema'
import { DealUpdateWithoutHistoryInputSchema } from './DealUpdateWithoutHistoryInputSchema'
import { DealUncheckedUpdateWithoutHistoryInputSchema } from './DealUncheckedUpdateWithoutHistoryInputSchema'

export const DealUpdateOneRequiredWithoutHistoryNestedInputSchema: z.ZodType<Prisma.DealUpdateOneRequiredWithoutHistoryNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => DealCreateWithoutHistoryInputSchema), z.lazy(() => DealUncheckedCreateWithoutHistoryInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutHistoryInputSchema).optional(),
        upsert: z.lazy(() => DealUpsertWithoutHistoryInputSchema).optional(),
        connect: z.lazy(() => DealWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => DealUpdateToOneWithWhereWithoutHistoryInputSchema),
                z.lazy(() => DealUpdateWithoutHistoryInputSchema),
                z.lazy(() => DealUncheckedUpdateWithoutHistoryInputSchema)
            ])
            .optional()
    })
    .strict()

export default DealUpdateOneRequiredWithoutHistoryNestedInputSchema
