import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateWithoutTransactionInputSchema } from './InboxCreateWithoutTransactionInputSchema'
import { InboxUncheckedCreateWithoutTransactionInputSchema } from './InboxUncheckedCreateWithoutTransactionInputSchema'
import { InboxCreateOrConnectWithoutTransactionInputSchema } from './InboxCreateOrConnectWithoutTransactionInputSchema'
import { InboxCreateManyTransactionInputEnvelopeSchema } from './InboxCreateManyTransactionInputEnvelopeSchema'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'

export const InboxCreateNestedManyWithoutTransactionInputSchema: z.ZodType<Prisma.InboxCreateNestedManyWithoutTransactionInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => InboxCreateWithoutTransactionInputSchema),
                z.lazy(() => InboxCreateWithoutTransactionInputSchema).array(),
                z.lazy(() => InboxUncheckedCreateWithoutTransactionInputSchema),
                z.lazy(() => InboxUncheckedCreateWithoutTransactionInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InboxCreateOrConnectWithoutTransactionInputSchema),
                z.lazy(() => InboxCreateOrConnectWithoutTransactionInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => InboxCreateManyTransactionInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default InboxCreateNestedManyWithoutTransactionInputSchema
