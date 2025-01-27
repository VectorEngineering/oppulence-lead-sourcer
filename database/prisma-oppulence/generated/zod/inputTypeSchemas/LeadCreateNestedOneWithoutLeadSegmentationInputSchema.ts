import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutLeadSegmentationInputSchema } from './LeadCreateWithoutLeadSegmentationInputSchema'
import { LeadUncheckedCreateWithoutLeadSegmentationInputSchema } from './LeadUncheckedCreateWithoutLeadSegmentationInputSchema'
import { LeadCreateOrConnectWithoutLeadSegmentationInputSchema } from './LeadCreateOrConnectWithoutLeadSegmentationInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedOneWithoutLeadSegmentationInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutLeadSegmentationInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutLeadSegmentationInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutLeadSegmentationInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadSegmentationInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
    })
    .strict()

export default LeadCreateNestedOneWithoutLeadSegmentationInputSchema
