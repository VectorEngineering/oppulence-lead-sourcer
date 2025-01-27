import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskCreateWithoutDealInputSchema } from './DealTaskCreateWithoutDealInputSchema'
import { DealTaskUncheckedCreateWithoutDealInputSchema } from './DealTaskUncheckedCreateWithoutDealInputSchema'
import { DealTaskCreateOrConnectWithoutDealInputSchema } from './DealTaskCreateOrConnectWithoutDealInputSchema'
import { DealTaskUpsertWithWhereUniqueWithoutDealInputSchema } from './DealTaskUpsertWithWhereUniqueWithoutDealInputSchema'
import { DealTaskCreateManyDealInputEnvelopeSchema } from './DealTaskCreateManyDealInputEnvelopeSchema'
import { DealTaskWhereUniqueInputSchema } from './DealTaskWhereUniqueInputSchema'
import { DealTaskUpdateWithWhereUniqueWithoutDealInputSchema } from './DealTaskUpdateWithWhereUniqueWithoutDealInputSchema'
import { DealTaskUpdateManyWithWhereWithoutDealInputSchema } from './DealTaskUpdateManyWithWhereWithoutDealInputSchema'
import { DealTaskScalarWhereInputSchema } from './DealTaskScalarWhereInputSchema'

export const DealTaskUpdateManyWithoutDealNestedInputSchema: z.ZodType<Prisma.DealTaskUpdateManyWithoutDealNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => DealTaskCreateWithoutDealInputSchema),
                z.lazy(() => DealTaskCreateWithoutDealInputSchema).array(),
                z.lazy(() => DealTaskUncheckedCreateWithoutDealInputSchema),
                z.lazy(() => DealTaskUncheckedCreateWithoutDealInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => DealTaskCreateOrConnectWithoutDealInputSchema),
                z.lazy(() => DealTaskCreateOrConnectWithoutDealInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => DealTaskUpsertWithWhereUniqueWithoutDealInputSchema),
                z.lazy(() => DealTaskUpsertWithWhereUniqueWithoutDealInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => DealTaskCreateManyDealInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => DealTaskWhereUniqueInputSchema), z.lazy(() => DealTaskWhereUniqueInputSchema).array()]).optional(),
        disconnect: z
            .union([z.lazy(() => DealTaskWhereUniqueInputSchema), z.lazy(() => DealTaskWhereUniqueInputSchema).array()])
            .optional(),
        delete: z.union([z.lazy(() => DealTaskWhereUniqueInputSchema), z.lazy(() => DealTaskWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => DealTaskWhereUniqueInputSchema), z.lazy(() => DealTaskWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => DealTaskUpdateWithWhereUniqueWithoutDealInputSchema),
                z.lazy(() => DealTaskUpdateWithWhereUniqueWithoutDealInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => DealTaskUpdateManyWithWhereWithoutDealInputSchema),
                z.lazy(() => DealTaskUpdateManyWithWhereWithoutDealInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => DealTaskScalarWhereInputSchema), z.lazy(() => DealTaskScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default DealTaskUpdateManyWithoutDealNestedInputSchema
