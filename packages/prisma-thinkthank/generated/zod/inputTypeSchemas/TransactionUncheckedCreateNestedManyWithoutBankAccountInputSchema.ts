import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCreateWithoutBankAccountInputSchema } from './TransactionCreateWithoutBankAccountInputSchema'
import { TransactionUncheckedCreateWithoutBankAccountInputSchema } from './TransactionUncheckedCreateWithoutBankAccountInputSchema'
import { TransactionCreateOrConnectWithoutBankAccountInputSchema } from './TransactionCreateOrConnectWithoutBankAccountInputSchema'
import { TransactionCreateManyBankAccountInputEnvelopeSchema } from './TransactionCreateManyBankAccountInputEnvelopeSchema'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'

export const TransactionUncheckedCreateNestedManyWithoutBankAccountInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutBankAccountInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => TransactionCreateWithoutBankAccountInputSchema),
                    z.lazy(() => TransactionCreateWithoutBankAccountInputSchema).array(),
                    z.lazy(() => TransactionUncheckedCreateWithoutBankAccountInputSchema),
                    z.lazy(() => TransactionUncheckedCreateWithoutBankAccountInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => TransactionCreateOrConnectWithoutBankAccountInputSchema),
                    z.lazy(() => TransactionCreateOrConnectWithoutBankAccountInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => TransactionCreateManyBankAccountInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => TransactionWhereUniqueInputSchema), z.lazy(() => TransactionWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default TransactionUncheckedCreateNestedManyWithoutBankAccountInputSchema
