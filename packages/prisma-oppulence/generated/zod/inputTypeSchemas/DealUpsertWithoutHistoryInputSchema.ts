import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealUpdateWithoutHistoryInputSchema } from './DealUpdateWithoutHistoryInputSchema'
import { DealUncheckedUpdateWithoutHistoryInputSchema } from './DealUncheckedUpdateWithoutHistoryInputSchema'
import { DealCreateWithoutHistoryInputSchema } from './DealCreateWithoutHistoryInputSchema'
import { DealUncheckedCreateWithoutHistoryInputSchema } from './DealUncheckedCreateWithoutHistoryInputSchema'
import { DealWhereInputSchema } from './DealWhereInputSchema'

export const DealUpsertWithoutHistoryInputSchema: z.ZodType<Prisma.DealUpsertWithoutHistoryInput> = z
    .object({
        update: z.union([z.lazy(() => DealUpdateWithoutHistoryInputSchema), z.lazy(() => DealUncheckedUpdateWithoutHistoryInputSchema)]),
        create: z.union([z.lazy(() => DealCreateWithoutHistoryInputSchema), z.lazy(() => DealUncheckedCreateWithoutHistoryInputSchema)]),
        where: z.lazy(() => DealWhereInputSchema).optional()
    })
    .strict()

export default DealUpsertWithoutHistoryInputSchema
