import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCreateWithoutInboxInputSchema } from './TransactionCreateWithoutInboxInputSchema'
import { TransactionUncheckedCreateWithoutInboxInputSchema } from './TransactionUncheckedCreateWithoutInboxInputSchema'
import { TransactionCreateOrConnectWithoutInboxInputSchema } from './TransactionCreateOrConnectWithoutInboxInputSchema'
import { TransactionUpsertWithoutInboxInputSchema } from './TransactionUpsertWithoutInboxInputSchema'
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema'
import { TransactionWhereUniqueInputSchema } from './TransactionWhereUniqueInputSchema'
import { TransactionUpdateToOneWithWhereWithoutInboxInputSchema } from './TransactionUpdateToOneWithWhereWithoutInboxInputSchema'
import { TransactionUpdateWithoutInboxInputSchema } from './TransactionUpdateWithoutInboxInputSchema'
import { TransactionUncheckedUpdateWithoutInboxInputSchema } from './TransactionUncheckedUpdateWithoutInboxInputSchema'

export const TransactionUpdateOneWithoutInboxNestedInputSchema: z.ZodType<Prisma.TransactionUpdateOneWithoutInboxNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => TransactionCreateWithoutInboxInputSchema),
                z.lazy(() => TransactionUncheckedCreateWithoutInboxInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => TransactionCreateOrConnectWithoutInboxInputSchema).optional(),
        upsert: z.lazy(() => TransactionUpsertWithoutInboxInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => TransactionWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => TransactionWhereInputSchema)]).optional(),
        connect: z.lazy(() => TransactionWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => TransactionUpdateToOneWithWhereWithoutInboxInputSchema),
                z.lazy(() => TransactionUpdateWithoutInboxInputSchema),
                z.lazy(() => TransactionUncheckedUpdateWithoutInboxInputSchema)
            ])
            .optional()
    })
    .strict()

export default TransactionUpdateOneWithoutInboxNestedInputSchema
