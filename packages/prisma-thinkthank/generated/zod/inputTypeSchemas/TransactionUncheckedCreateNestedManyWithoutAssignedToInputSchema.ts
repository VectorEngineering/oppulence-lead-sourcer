import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCreateWithoutAssignedToInputSchema } from './TransactionCreateWithoutAssignedToInputSchema'
import { TransactionUncheckedCreateWithoutAssignedToInputSchema } from './TransactionUncheckedCreateWithoutAssignedToInputSchema'
import { TransactionCreateOrConnectWithoutAssignedToInputSchema } from './TransactionCreateOrConnectWithoutAssignedToInputSchema'
import { TransactionCreateManyAssignedToInputEnvelopeSchema } from './TransactionCreateManyAssignedToInputEnvelopeSchema'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'

export const TransactionUncheckedCreateNestedManyWithoutAssignedToInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutAssignedToInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionCreateWithoutAssignedToInputSchema),
                    z.lazy(() => TransactionCreateWithoutAssignedToInputSchema).array(),
                    z.lazy(() => TransactionUncheckedCreateWithoutAssignedToInputSchema),
                    z.lazy(() => TransactionUncheckedCreateWithoutAssignedToInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => TransactionCreateOrConnectWithoutAssignedToInputSchema),
                    z.lazy(() => TransactionCreateOrConnectWithoutAssignedToInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => TransactionCreateManyAssignedToInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => TransactionWhereUniqueInputSchema), z.lazy(() => TransactionWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default TransactionUncheckedCreateNestedManyWithoutAssignedToInputSchema
