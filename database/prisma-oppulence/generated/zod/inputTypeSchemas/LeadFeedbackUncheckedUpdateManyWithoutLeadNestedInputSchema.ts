import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadFeedbackCreateWithoutLeadInputSchema } from './LeadFeedbackCreateWithoutLeadInputSchema'
import { LeadFeedbackUncheckedCreateWithoutLeadInputSchema } from './LeadFeedbackUncheckedCreateWithoutLeadInputSchema'
import { LeadFeedbackCreateOrConnectWithoutLeadInputSchema } from './LeadFeedbackCreateOrConnectWithoutLeadInputSchema'
import { LeadFeedbackUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadFeedbackUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadFeedbackCreateManyLeadInputEnvelopeSchema } from './LeadFeedbackCreateManyLeadInputEnvelopeSchema'
import { LeadFeedbackWhereUniqueInputSchema } from './LeadFeedbackWhereUniqueInputSchema'
import { LeadFeedbackUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadFeedbackUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadFeedbackUpdateManyWithWhereWithoutLeadInputSchema } from './LeadFeedbackUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadFeedbackScalarWhereInputSchema } from './LeadFeedbackScalarWhereInputSchema'

export const LeadFeedbackUncheckedUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadFeedbackUncheckedUpdateManyWithoutLeadNestedInput> =
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
            upsert: z
                .union([
                    z.lazy(() => LeadFeedbackUpsertWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadFeedbackUpsertWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadFeedbackCreateManyLeadInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => LeadFeedbackWhereUniqueInputSchema), z.lazy(() => LeadFeedbackWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => LeadFeedbackWhereUniqueInputSchema), z.lazy(() => LeadFeedbackWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => LeadFeedbackWhereUniqueInputSchema), z.lazy(() => LeadFeedbackWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => LeadFeedbackWhereUniqueInputSchema), z.lazy(() => LeadFeedbackWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadFeedbackUpdateWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadFeedbackUpdateWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadFeedbackUpdateManyWithWhereWithoutLeadInputSchema),
                    z.lazy(() => LeadFeedbackUpdateManyWithWhereWithoutLeadInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => LeadFeedbackScalarWhereInputSchema), z.lazy(() => LeadFeedbackScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadFeedbackUncheckedUpdateManyWithoutLeadNestedInputSchema
