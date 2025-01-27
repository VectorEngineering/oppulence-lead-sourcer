import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadFeedbackCreateWithoutLeadInputSchema } from './LeadFeedbackCreateWithoutLeadInputSchema'
import { LeadFeedbackUncheckedCreateWithoutLeadInputSchema } from './LeadFeedbackUncheckedCreateWithoutLeadInputSchema'
import { LeadFeedbackCreateOrConnectWithoutLeadInputSchema } from './LeadFeedbackCreateOrConnectWithoutLeadInputSchema'
import { LeadFeedbackCreateManyLeadInputEnvelopeSchema } from './LeadFeedbackCreateManyLeadInputEnvelopeSchema'
import { LeadFeedbackWhereUniqueInputSchema } from './LeadFeedbackWhereUniqueInputSchema'

export const LeadFeedbackUncheckedCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadFeedbackUncheckedCreateNestedManyWithoutLeadInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadFeedbackCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadFeedbackCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadFeedbackUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadFeedbackUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadFeedbackCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadFeedbackCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadFeedbackCreateManyLeadInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => LeadFeedbackWhereUniqueInputSchema), z.lazy(() => LeadFeedbackWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadFeedbackUncheckedCreateNestedManyWithoutLeadInputSchema
