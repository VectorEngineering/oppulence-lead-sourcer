import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryCreateWithoutProjectInputSchema } from './TransactionCategoryCreateWithoutProjectInputSchema'
import { TransactionCategoryUncheckedCreateWithoutProjectInputSchema } from './TransactionCategoryUncheckedCreateWithoutProjectInputSchema'
import { TransactionCategoryCreateOrConnectWithoutProjectInputSchema } from './TransactionCategoryCreateOrConnectWithoutProjectInputSchema'
import { TransactionCategoryUpsertWithWhereUniqueWithoutProjectInputSchema } from './TransactionCategoryUpsertWithWhereUniqueWithoutProjectInputSchema'
import { TransactionCategoryCreateManyProjectInputEnvelopeSchema } from './TransactionCategoryCreateManyProjectInputEnvelopeSchema'
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema'
import { TransactionCategoryUpdateWithWhereUniqueWithoutProjectInputSchema } from './TransactionCategoryUpdateWithWhereUniqueWithoutProjectInputSchema'
import { TransactionCategoryUpdateManyWithWhereWithoutProjectInputSchema } from './TransactionCategoryUpdateManyWithWhereWithoutProjectInputSchema'
import { TransactionCategoryScalarWhereInputSchema } from './TransactionCategoryScalarWhereInputSchema'

export const TransactionCategoryUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.TransactionCategoryUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionCategoryCreateWithoutProjectInputSchema),
                    z.lazy(() => TransactionCategoryCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => TransactionCategoryUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => TransactionCategoryUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => TransactionCategoryCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => TransactionCategoryCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => TransactionCategoryUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => TransactionCategoryUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => TransactionCategoryCreateManyProjectInputEnvelopeSchema).optional(),
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
                    z.lazy(() => TransactionCategoryUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => TransactionCategoryUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => TransactionCategoryUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => TransactionCategoryUpdateManyWithWhereWithoutProjectInputSchema).array()
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

export default TransactionCategoryUpdateManyWithoutProjectNestedInputSchema
