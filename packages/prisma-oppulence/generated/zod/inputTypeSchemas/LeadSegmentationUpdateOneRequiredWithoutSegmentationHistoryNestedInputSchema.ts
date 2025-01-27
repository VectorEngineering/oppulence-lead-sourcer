import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSegmentationCreateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationCreateWithoutSegmentationHistoryInputSchema'
import { LeadSegmentationUncheckedCreateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationUncheckedCreateWithoutSegmentationHistoryInputSchema'
import { LeadSegmentationCreateOrConnectWithoutSegmentationHistoryInputSchema } from './LeadSegmentationCreateOrConnectWithoutSegmentationHistoryInputSchema'
import { LeadSegmentationUpsertWithoutSegmentationHistoryInputSchema } from './LeadSegmentationUpsertWithoutSegmentationHistoryInputSchema'
import { LeadSegmentationWhereUniqueInputSchema } from './LeadSegmentationWhereUniqueInputSchema'
import { LeadSegmentationUpdateToOneWithWhereWithoutSegmentationHistoryInputSchema } from './LeadSegmentationUpdateToOneWithWhereWithoutSegmentationHistoryInputSchema'
import { LeadSegmentationUpdateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationUpdateWithoutSegmentationHistoryInputSchema'
import { LeadSegmentationUncheckedUpdateWithoutSegmentationHistoryInputSchema } from './LeadSegmentationUncheckedUpdateWithoutSegmentationHistoryInputSchema'

export const LeadSegmentationUpdateOneRequiredWithoutSegmentationHistoryNestedInputSchema: z.ZodType<Prisma.LeadSegmentationUpdateOneRequiredWithoutSegmentationHistoryNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadSegmentationCreateWithoutSegmentationHistoryInputSchema),
                    z.lazy(() => LeadSegmentationUncheckedCreateWithoutSegmentationHistoryInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadSegmentationCreateOrConnectWithoutSegmentationHistoryInputSchema).optional(),
            upsert: z.lazy(() => LeadSegmentationUpsertWithoutSegmentationHistoryInputSchema).optional(),
            connect: z.lazy(() => LeadSegmentationWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => LeadSegmentationUpdateToOneWithWhereWithoutSegmentationHistoryInputSchema),
                    z.lazy(() => LeadSegmentationUpdateWithoutSegmentationHistoryInputSchema),
                    z.lazy(() => LeadSegmentationUncheckedUpdateWithoutSegmentationHistoryInputSchema)
                ])
                .optional()
        })
        .strict()

export default LeadSegmentationUpdateOneRequiredWithoutSegmentationHistoryNestedInputSchema
