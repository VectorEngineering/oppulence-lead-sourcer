import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSegmentationHistoryWhereUniqueInputSchema } from './LeadSegmentationHistoryWhereUniqueInputSchema'
import { LeadSegmentationHistoryUpdateWithoutSegmentationInputSchema } from './LeadSegmentationHistoryUpdateWithoutSegmentationInputSchema'
import { LeadSegmentationHistoryUncheckedUpdateWithoutSegmentationInputSchema } from './LeadSegmentationHistoryUncheckedUpdateWithoutSegmentationInputSchema'
import { LeadSegmentationHistoryCreateWithoutSegmentationInputSchema } from './LeadSegmentationHistoryCreateWithoutSegmentationInputSchema'
import { LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema } from './LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema'

export const LeadSegmentationHistoryUpsertWithWhereUniqueWithoutSegmentationInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryUpsertWithWhereUniqueWithoutSegmentationInput> =
    z
        .object({
            where: z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => LeadSegmentationHistoryUpdateWithoutSegmentationInputSchema),
                z.lazy(() => LeadSegmentationHistoryUncheckedUpdateWithoutSegmentationInputSchema)
            ]),
            create: z.union([
                z.lazy(() => LeadSegmentationHistoryCreateWithoutSegmentationInputSchema),
                z.lazy(() => LeadSegmentationHistoryUncheckedCreateWithoutSegmentationInputSchema)
            ])
        })
        .strict()

export default LeadSegmentationHistoryUpsertWithWhereUniqueWithoutSegmentationInputSchema
