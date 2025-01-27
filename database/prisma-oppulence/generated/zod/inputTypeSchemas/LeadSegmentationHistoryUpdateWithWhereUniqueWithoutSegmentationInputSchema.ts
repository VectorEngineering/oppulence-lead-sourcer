import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSegmentationHistoryWhereUniqueInputSchema } from './LeadSegmentationHistoryWhereUniqueInputSchema'
import { LeadSegmentationHistoryUpdateWithoutSegmentationInputSchema } from './LeadSegmentationHistoryUpdateWithoutSegmentationInputSchema'
import { LeadSegmentationHistoryUncheckedUpdateWithoutSegmentationInputSchema } from './LeadSegmentationHistoryUncheckedUpdateWithoutSegmentationInputSchema'

export const LeadSegmentationHistoryUpdateWithWhereUniqueWithoutSegmentationInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryUpdateWithWhereUniqueWithoutSegmentationInput> =
    z
        .object({
            where: z.lazy(() => LeadSegmentationHistoryWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadSegmentationHistoryUpdateWithoutSegmentationInputSchema),
                z.lazy(() => LeadSegmentationHistoryUncheckedUpdateWithoutSegmentationInputSchema)
            ])
        })
        .strict()

export default LeadSegmentationHistoryUpdateWithWhereUniqueWithoutSegmentationInputSchema
