import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryCreateWithoutParentInputSchema } from './TransactionCategoryCreateWithoutParentInputSchema'
import { TransactionCategoryUncheckedCreateWithoutParentInputSchema } from './TransactionCategoryUncheckedCreateWithoutParentInputSchema'
import { TransactionCategoryCreateOrConnectWithoutParentInputSchema } from './TransactionCategoryCreateOrConnectWithoutParentInputSchema'
import { TransactionCategoryUpsertWithWhereUniqueWithoutParentInputSchema } from './TransactionCategoryUpsertWithWhereUniqueWithoutParentInputSchema'
import { TransactionCategoryCreateManyParentInputEnvelopeSchema } from './TransactionCategoryCreateManyParentInputEnvelopeSchema'
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema'
import { TransactionCategoryUpdateWithWhereUniqueWithoutParentInputSchema } from './TransactionCategoryUpdateWithWhereUniqueWithoutParentInputSchema'
import { TransactionCategoryUpdateManyWithWhereWithoutParentInputSchema } from './TransactionCategoryUpdateManyWithWhereWithoutParentInputSchema'
import { TransactionCategoryScalarWhereInputSchema } from './TransactionCategoryScalarWhereInputSchema'

export const TransactionCategoryUncheckedUpdateManyWithoutParentNestedInputSchema: z.ZodType<Prisma.TransactionCategoryUncheckedUpdateManyWithoutParentNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionCategoryCreateWithoutParentInputSchema),
                    z.lazy(() => TransactionCategoryCreateWithoutParentInputSchema).array(),
                    z.lazy(() => TransactionCategoryUncheckedCreateWithoutParentInputSchema),
                    z.lazy(() => TransactionCategoryUncheckedCreateWithoutParentInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => TransactionCategoryCreateOrConnectWithoutParentInputSchema),
                    z.lazy(() => TransactionCategoryCreateOrConnectWithoutParentInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => TransactionCategoryUpsertWithWhereUniqueWithoutParentInputSchema),
                    z.lazy(() => TransactionCategoryUpsertWithWhereUniqueWithoutParentInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => TransactionCategoryCreateManyParentInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
                    z.lazy(() => TransactionCategoryWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
                    z.lazy(() => TransactionCategoryWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
                    z.lazy(() => TransactionCategoryWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
                    z.lazy(() => TransactionCategoryWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => TransactionCategoryUpdateWithWhereUniqueWithoutParentInputSchema),
                    z.lazy(() => TransactionCategoryUpdateWithWhereUniqueWithoutParentInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => TransactionCategoryUpdateManyWithWhereWithoutParentInputSchema),
                    z.lazy(() => TransactionCategoryUpdateManyWithWhereWithoutParentInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => TransactionCategoryScalarWhereInputSchema),
                    z.lazy(() => TransactionCategoryScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default TransactionCategoryUncheckedUpdateManyWithoutParentNestedInputSchema
