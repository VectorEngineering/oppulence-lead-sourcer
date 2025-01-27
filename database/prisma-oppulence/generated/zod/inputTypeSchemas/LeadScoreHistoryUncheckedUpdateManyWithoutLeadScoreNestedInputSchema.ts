import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoreHistoryCreateWithoutLeadScoreInputSchema } from './LeadScoreHistoryCreateWithoutLeadScoreInputSchema'
import { LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema } from './LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema'
import { LeadScoreHistoryCreateOrConnectWithoutLeadScoreInputSchema } from './LeadScoreHistoryCreateOrConnectWithoutLeadScoreInputSchema'
import { LeadScoreHistoryUpsertWithWhereUniqueWithoutLeadScoreInputSchema } from './LeadScoreHistoryUpsertWithWhereUniqueWithoutLeadScoreInputSchema'
import { LeadScoreHistoryCreateManyLeadScoreInputEnvelopeSchema } from './LeadScoreHistoryCreateManyLeadScoreInputEnvelopeSchema'
import { LeadScoreHistoryWhereUniqueInputSchema } from './LeadScoreHistoryWhereUniqueInputSchema'
import { LeadScoreHistoryUpdateWithWhereUniqueWithoutLeadScoreInputSchema } from './LeadScoreHistoryUpdateWithWhereUniqueWithoutLeadScoreInputSchema'
import { LeadScoreHistoryUpdateManyWithWhereWithoutLeadScoreInputSchema } from './LeadScoreHistoryUpdateManyWithWhereWithoutLeadScoreInputSchema'
import { LeadScoreHistoryScalarWhereInputSchema } from './LeadScoreHistoryScalarWhereInputSchema'

export const LeadScoreHistoryUncheckedUpdateManyWithoutLeadScoreNestedInputSchema: z.ZodType<Prisma.LeadScoreHistoryUncheckedUpdateManyWithoutLeadScoreNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadScoreHistoryCreateWithoutLeadScoreInputSchema),
                    z.lazy(() => LeadScoreHistoryCreateWithoutLeadScoreInputSchema).array(),
                    z.lazy(() => LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema),
                    z.lazy(() => LeadScoreHistoryUncheckedCreateWithoutLeadScoreInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadScoreHistoryCreateOrConnectWithoutLeadScoreInputSchema),
                    z.lazy(() => LeadScoreHistoryCreateOrConnectWithoutLeadScoreInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadScoreHistoryUpsertWithWhereUniqueWithoutLeadScoreInputSchema),
                    z.lazy(() => LeadScoreHistoryUpsertWithWhereUniqueWithoutLeadScoreInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadScoreHistoryCreateManyLeadScoreInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema), z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema), z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema), z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema), z.lazy(() => LeadScoreHistoryWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadScoreHistoryUpdateWithWhereUniqueWithoutLeadScoreInputSchema),
                    z.lazy(() => LeadScoreHistoryUpdateWithWhereUniqueWithoutLeadScoreInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadScoreHistoryUpdateManyWithWhereWithoutLeadScoreInputSchema),
                    z.lazy(() => LeadScoreHistoryUpdateManyWithWhereWithoutLeadScoreInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => LeadScoreHistoryScalarWhereInputSchema), z.lazy(() => LeadScoreHistoryScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadScoreHistoryUncheckedUpdateManyWithoutLeadScoreNestedInputSchema
