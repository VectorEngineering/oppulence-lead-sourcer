import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealActivityCreateWithoutDealInputSchema } from './DealActivityCreateWithoutDealInputSchema'
import { DealActivityUncheckedCreateWithoutDealInputSchema } from './DealActivityUncheckedCreateWithoutDealInputSchema'
import { DealActivityCreateOrConnectWithoutDealInputSchema } from './DealActivityCreateOrConnectWithoutDealInputSchema'
import { DealActivityUpsertWithWhereUniqueWithoutDealInputSchema } from './DealActivityUpsertWithWhereUniqueWithoutDealInputSchema'
import { DealActivityCreateManyDealInputEnvelopeSchema } from './DealActivityCreateManyDealInputEnvelopeSchema'
import { DealActivityWhereUniqueInputSchema } from './DealActivityWhereUniqueInputSchema'
import { DealActivityUpdateWithWhereUniqueWithoutDealInputSchema } from './DealActivityUpdateWithWhereUniqueWithoutDealInputSchema'
import { DealActivityUpdateManyWithWhereWithoutDealInputSchema } from './DealActivityUpdateManyWithWhereWithoutDealInputSchema'
import { DealActivityScalarWhereInputSchema } from './DealActivityScalarWhereInputSchema'

export const DealActivityUpdateManyWithoutDealNestedInputSchema: z.ZodType<Prisma.DealActivityUpdateManyWithoutDealNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => DealActivityCreateWithoutDealInputSchema),
                z.lazy(() => DealActivityCreateWithoutDealInputSchema).array(),
                z.lazy(() => DealActivityUncheckedCreateWithoutDealInputSchema),
                z.lazy(() => DealActivityUncheckedCreateWithoutDealInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => DealActivityCreateOrConnectWithoutDealInputSchema),
                z.lazy(() => DealActivityCreateOrConnectWithoutDealInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => DealActivityUpsertWithWhereUniqueWithoutDealInputSchema),
                z.lazy(() => DealActivityUpsertWithWhereUniqueWithoutDealInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => DealActivityCreateManyDealInputEnvelopeSchema).optional(),
        set: z
            .union([z.lazy(() => DealActivityWhereUniqueInputSchema), z.lazy(() => DealActivityWhereUniqueInputSchema).array()])
            .optional(),
        disconnect: z
            .union([z.lazy(() => DealActivityWhereUniqueInputSchema), z.lazy(() => DealActivityWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => DealActivityWhereUniqueInputSchema), z.lazy(() => DealActivityWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => DealActivityWhereUniqueInputSchema), z.lazy(() => DealActivityWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => DealActivityUpdateWithWhereUniqueWithoutDealInputSchema),
                z.lazy(() => DealActivityUpdateWithWhereUniqueWithoutDealInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => DealActivityUpdateManyWithWhereWithoutDealInputSchema),
                z.lazy(() => DealActivityUpdateManyWithWhereWithoutDealInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => DealActivityScalarWhereInputSchema), z.lazy(() => DealActivityScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default DealActivityUpdateManyWithoutDealNestedInputSchema
