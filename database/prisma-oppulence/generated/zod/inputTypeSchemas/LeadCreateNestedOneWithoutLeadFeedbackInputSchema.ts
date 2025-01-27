import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutLeadFeedbackInputSchema } from './LeadCreateWithoutLeadFeedbackInputSchema'
import { LeadUncheckedCreateWithoutLeadFeedbackInputSchema } from './LeadUncheckedCreateWithoutLeadFeedbackInputSchema'
import { LeadCreateOrConnectWithoutLeadFeedbackInputSchema } from './LeadCreateOrConnectWithoutLeadFeedbackInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'

export const LeadCreateNestedOneWithoutLeadFeedbackInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutLeadFeedbackInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutLeadFeedbackInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutLeadFeedbackInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadFeedbackInputSchema).optional(),
        connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
    })
    .strict()

export default LeadCreateNestedOneWithoutLeadFeedbackInputSchema
