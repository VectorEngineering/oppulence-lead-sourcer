import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryCreateWithoutProjectInputSchema } from './TransactionCategoryCreateWithoutProjectInputSchema'
import { TransactionCategoryUncheckedCreateWithoutProjectInputSchema } from './TransactionCategoryUncheckedCreateWithoutProjectInputSchema'
import { TransactionCategoryCreateOrConnectWithoutProjectInputSchema } from './TransactionCategoryCreateOrConnectWithoutProjectInputSchema'
import { TransactionCategoryCreateManyProjectInputEnvelopeSchema } from './TransactionCategoryCreateManyProjectInputEnvelopeSchema'
import { TransactionCategoryWhereUniqueInputSchema } from './TransactionCategoryWhereUniqueInputSchema'

export const TransactionCategoryUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.TransactionCategoryUncheckedCreateNestedManyWithoutProjectInput> =
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
            createMany: z.lazy(() => TransactionCategoryCreateManyProjectInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => TransactionCategoryWhereUniqueInputSchema),
                    z.lazy(() => TransactionCategoryWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default TransactionCategoryUncheckedCreateNestedManyWithoutProjectInputSchema
