import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankAccountCreateWithoutTransactionsInputSchema } from './BankAccountCreateWithoutTransactionsInputSchema'
import { BankAccountUncheckedCreateWithoutTransactionsInputSchema } from './BankAccountUncheckedCreateWithoutTransactionsInputSchema'
import { BankAccountCreateOrConnectWithoutTransactionsInputSchema } from './BankAccountCreateOrConnectWithoutTransactionsInputSchema'
import { BankAccountUpsertWithoutTransactionsInputSchema } from './BankAccountUpsertWithoutTransactionsInputSchema'
import { BankAccountWhereInputSchema } from './BankAccountWhereInputSchema'
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema'
import { BankAccountUpdateToOneWithWhereWithoutTransactionsInputSchema } from './BankAccountUpdateToOneWithWhereWithoutTransactionsInputSchema'
import { BankAccountUpdateWithoutTransactionsInputSchema } from './BankAccountUpdateWithoutTransactionsInputSchema'
import { BankAccountUncheckedUpdateWithoutTransactionsInputSchema } from './BankAccountUncheckedUpdateWithoutTransactionsInputSchema'

export const BankAccountUpdateOneWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.BankAccountUpdateOneWithoutTransactionsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BankAccountCreateWithoutTransactionsInputSchema),
                    z.lazy(() => BankAccountUncheckedCreateWithoutTransactionsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => BankAccountCreateOrConnectWithoutTransactionsInputSchema).optional(),
            upsert: z.lazy(() => BankAccountUpsertWithoutTransactionsInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => BankAccountWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => BankAccountWhereInputSchema)]).optional(),
            connect: z.lazy(() => BankAccountWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => BankAccountUpdateToOneWithWhereWithoutTransactionsInputSchema),
                    z.lazy(() => BankAccountUpdateWithoutTransactionsInputSchema),
                    z.lazy(() => BankAccountUncheckedUpdateWithoutTransactionsInputSchema)
                ])
                .optional()
        })
        .strict()

export default BankAccountUpdateOneWithoutTransactionsNestedInputSchema
