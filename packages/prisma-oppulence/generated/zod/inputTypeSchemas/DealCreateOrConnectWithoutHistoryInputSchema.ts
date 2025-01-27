import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealCreateWithoutHistoryInputSchema } from './DealCreateWithoutHistoryInputSchema'
import { DealUncheckedCreateWithoutHistoryInputSchema } from './DealUncheckedCreateWithoutHistoryInputSchema'

export const DealCreateOrConnectWithoutHistoryInputSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutHistoryInput> = z
    .object({
        where: z.lazy(() => DealWhereUniqueInputSchema),
        create: z.union([z.lazy(() => DealCreateWithoutHistoryInputSchema), z.lazy(() => DealUncheckedCreateWithoutHistoryInputSchema)])
    })
    .strict()

export default DealCreateOrConnectWithoutHistoryInputSchema
