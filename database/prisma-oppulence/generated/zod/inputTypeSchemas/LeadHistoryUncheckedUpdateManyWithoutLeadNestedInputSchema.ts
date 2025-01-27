import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadHistoryCreateWithoutLeadInputSchema } from './LeadHistoryCreateWithoutLeadInputSchema'
import { LeadHistoryUncheckedCreateWithoutLeadInputSchema } from './LeadHistoryUncheckedCreateWithoutLeadInputSchema'
import { LeadHistoryCreateOrConnectWithoutLeadInputSchema } from './LeadHistoryCreateOrConnectWithoutLeadInputSchema'
import { LeadHistoryUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadHistoryUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadHistoryCreateManyLeadInputEnvelopeSchema } from './LeadHistoryCreateManyLeadInputEnvelopeSchema'
import { LeadHistoryWhereUniqueInputSchema } from './LeadHistoryWhereUniqueInputSchema'
import { LeadHistoryUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadHistoryUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadHistoryUpdateManyWithWhereWithoutLeadInputSchema } from './LeadHistoryUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadHistoryScalarWhereInputSchema } from './LeadHistoryScalarWhereInputSchema'

export const LeadHistoryUncheckedUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadHistoryUncheckedUpdateManyWithoutLeadNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadHistoryCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadHistoryCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadHistoryUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadHistoryUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadHistoryCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadHistoryCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadHistoryUpsertWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadHistoryUpsertWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadHistoryCreateManyLeadInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => LeadHistoryWhereUniqueInputSchema), z.lazy(() => LeadHistoryWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => LeadHistoryWhereUniqueInputSchema), z.lazy(() => LeadHistoryWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => LeadHistoryWhereUniqueInputSchema), z.lazy(() => LeadHistoryWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => LeadHistoryWhereUniqueInputSchema), z.lazy(() => LeadHistoryWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadHistoryUpdateWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadHistoryUpdateWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadHistoryUpdateManyWithWhereWithoutLeadInputSchema),
                    z.lazy(() => LeadHistoryUpdateManyWithWhereWithoutLeadInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => LeadHistoryScalarWhereInputSchema), z.lazy(() => LeadHistoryScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadHistoryUncheckedUpdateManyWithoutLeadNestedInputSchema
