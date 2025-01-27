import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutLeadFeedbackInputSchema } from './LeadCreateWithoutLeadFeedbackInputSchema'
import { LeadUncheckedCreateWithoutLeadFeedbackInputSchema } from './LeadUncheckedCreateWithoutLeadFeedbackInputSchema'
import { LeadCreateOrConnectWithoutLeadFeedbackInputSchema } from './LeadCreateOrConnectWithoutLeadFeedbackInputSchema'
import { LeadUpsertWithoutLeadFeedbackInputSchema } from './LeadUpsertWithoutLeadFeedbackInputSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateToOneWithWhereWithoutLeadFeedbackInputSchema } from './LeadUpdateToOneWithWhereWithoutLeadFeedbackInputSchema'
import { LeadUpdateWithoutLeadFeedbackInputSchema } from './LeadUpdateWithoutLeadFeedbackInputSchema'
import { LeadUncheckedUpdateWithoutLeadFeedbackInputSchema } from './LeadUncheckedUpdateWithoutLeadFeedbackInputSchema'

export const LeadUpdateOneRequiredWithoutLeadFeedbackNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutLeadFeedbackNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadCreateWithoutLeadFeedbackInputSchema),
                    z.lazy(() => LeadUncheckedCreateWithoutLeadFeedbackInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadFeedbackInputSchema).optional(),
            upsert: z.lazy(() => LeadUpsertWithoutLeadFeedbackInputSchema).optional(),
            connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => LeadUpdateToOneWithWhereWithoutLeadFeedbackInputSchema),
                    z.lazy(() => LeadUpdateWithoutLeadFeedbackInputSchema),
                    z.lazy(() => LeadUncheckedUpdateWithoutLeadFeedbackInputSchema)
                ])
                .optional()
        })
        .strict()

export default LeadUpdateOneRequiredWithoutLeadFeedbackNestedInputSchema
