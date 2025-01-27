import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCreateWithoutProjectInputSchema } from './TransactionCreateWithoutProjectInputSchema'
import { TransactionUncheckedCreateWithoutProjectInputSchema } from './TransactionUncheckedCreateWithoutProjectInputSchema'
import { TransactionCreateOrConnectWithoutProjectInputSchema } from './TransactionCreateOrConnectWithoutProjectInputSchema'
import { TransactionCreateManyProjectInputEnvelopeSchema } from './TransactionCreateManyProjectInputEnvelopeSchema'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'

export const TransactionCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.TransactionCreateNestedManyWithoutProjectInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => TransactionCreateWithoutProjectInputSchema),
                z.lazy(() => TransactionCreateWithoutProjectInputSchema).array(),
                z.lazy(() => TransactionUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => TransactionUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => TransactionCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => TransactionCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => TransactionCreateManyProjectInputEnvelopeSchema).optional(),
        connect: z
            .union([z.lazy(() => TransactionWhereUniqueInputSchema), z.lazy(() => TransactionWhereUniqueInputSchema).array()])
            .optional()
    })
    .strict()

export default TransactionCreateNestedManyWithoutProjectInputSchema
