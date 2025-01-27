import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCompetitorCreateWithoutDealInputSchema } from './DealCompetitorCreateWithoutDealInputSchema'
import { DealCompetitorUncheckedCreateWithoutDealInputSchema } from './DealCompetitorUncheckedCreateWithoutDealInputSchema'
import { DealCompetitorCreateOrConnectWithoutDealInputSchema } from './DealCompetitorCreateOrConnectWithoutDealInputSchema'
import { DealCompetitorUpsertWithWhereUniqueWithoutDealInputSchema } from './DealCompetitorUpsertWithWhereUniqueWithoutDealInputSchema'
import { DealCompetitorCreateManyDealInputEnvelopeSchema } from './DealCompetitorCreateManyDealInputEnvelopeSchema'
import { DealCompetitorWhereUniqueInputSchema } from './DealCompetitorWhereUniqueInputSchema'
import { DealCompetitorUpdateWithWhereUniqueWithoutDealInputSchema } from './DealCompetitorUpdateWithWhereUniqueWithoutDealInputSchema'
import { DealCompetitorUpdateManyWithWhereWithoutDealInputSchema } from './DealCompetitorUpdateManyWithWhereWithoutDealInputSchema'
import { DealCompetitorScalarWhereInputSchema } from './DealCompetitorScalarWhereInputSchema'

export const DealCompetitorUncheckedUpdateManyWithoutDealNestedInputSchema: z.ZodType<Prisma.DealCompetitorUncheckedUpdateManyWithoutDealNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => DealCompetitorCreateWithoutDealInputSchema),
                    z.lazy(() => DealCompetitorCreateWithoutDealInputSchema).array(),
                    z.lazy(() => DealCompetitorUncheckedCreateWithoutDealInputSchema),
                    z.lazy(() => DealCompetitorUncheckedCreateWithoutDealInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => DealCompetitorCreateOrConnectWithoutDealInputSchema),
                    z.lazy(() => DealCompetitorCreateOrConnectWithoutDealInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => DealCompetitorUpsertWithWhereUniqueWithoutDealInputSchema),
                    z.lazy(() => DealCompetitorUpsertWithWhereUniqueWithoutDealInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => DealCompetitorCreateManyDealInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => DealCompetitorWhereUniqueInputSchema), z.lazy(() => DealCompetitorWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => DealCompetitorWhereUniqueInputSchema), z.lazy(() => DealCompetitorWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => DealCompetitorWhereUniqueInputSchema), z.lazy(() => DealCompetitorWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => DealCompetitorWhereUniqueInputSchema), z.lazy(() => DealCompetitorWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => DealCompetitorUpdateWithWhereUniqueWithoutDealInputSchema),
                    z.lazy(() => DealCompetitorUpdateWithWhereUniqueWithoutDealInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => DealCompetitorUpdateManyWithWhereWithoutDealInputSchema),
                    z.lazy(() => DealCompetitorUpdateManyWithWhereWithoutDealInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => DealCompetitorScalarWhereInputSchema), z.lazy(() => DealCompetitorScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default DealCompetitorUncheckedUpdateManyWithoutDealNestedInputSchema
