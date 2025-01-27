import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutLeadSegmentationInputSchema } from './LeadUpdateWithoutLeadSegmentationInputSchema'
import { LeadUncheckedUpdateWithoutLeadSegmentationInputSchema } from './LeadUncheckedUpdateWithoutLeadSegmentationInputSchema'

export const LeadUpdateToOneWithWhereWithoutLeadSegmentationInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutLeadSegmentationInput> =
    z
        .object({
            where: z.lazy(() => LeadWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => LeadUpdateWithoutLeadSegmentationInputSchema),
                z.lazy(() => LeadUncheckedUpdateWithoutLeadSegmentationInputSchema)
            ])
        })
        .strict()

export default LeadUpdateToOneWithWhereWithoutLeadSegmentationInputSchema
