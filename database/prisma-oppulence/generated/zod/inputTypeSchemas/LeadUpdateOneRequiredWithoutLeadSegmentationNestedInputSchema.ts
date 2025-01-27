import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutLeadSegmentationInputSchema } from './LeadCreateWithoutLeadSegmentationInputSchema'
import { LeadUncheckedCreateWithoutLeadSegmentationInputSchema } from './LeadUncheckedCreateWithoutLeadSegmentationInputSchema'
import { LeadCreateOrConnectWithoutLeadSegmentationInputSchema } from './LeadCreateOrConnectWithoutLeadSegmentationInputSchema'
import { LeadUpsertWithoutLeadSegmentationInputSchema } from './LeadUpsertWithoutLeadSegmentationInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateToOneWithWhereWithoutLeadSegmentationInputSchema } from './LeadUpdateToOneWithWhereWithoutLeadSegmentationInputSchema'
import { LeadUpdateWithoutLeadSegmentationInputSchema } from './LeadUpdateWithoutLeadSegmentationInputSchema'
import { LeadUncheckedUpdateWithoutLeadSegmentationInputSchema } from './LeadUncheckedUpdateWithoutLeadSegmentationInputSchema'

export const LeadUpdateOneRequiredWithoutLeadSegmentationNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutLeadSegmentationNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCreateWithoutLeadSegmentationInputSchema),
                    z.lazy(() => LeadUncheckedCreateWithoutLeadSegmentationInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadSegmentationInputSchema).optional(),
            upsert: z.lazy(() => LeadUpsertWithoutLeadSegmentationInputSchema).optional(),
            connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => LeadUpdateToOneWithWhereWithoutLeadSegmentationInputSchema),
                    z.lazy(() => LeadUpdateWithoutLeadSegmentationInputSchema),
                    z.lazy(() => LeadUncheckedUpdateWithoutLeadSegmentationInputSchema)
                ])
                .optional()
        })
        .strict()

export default LeadUpdateOneRequiredWithoutLeadSegmentationNestedInputSchema
