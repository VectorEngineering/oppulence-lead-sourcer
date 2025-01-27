import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateWithoutSharesInputSchema } from './InboxCreateWithoutSharesInputSchema'
import { InboxUncheckedCreateWithoutSharesInputSchema } from './InboxUncheckedCreateWithoutSharesInputSchema'
import { InboxCreateOrConnectWithoutSharesInputSchema } from './InboxCreateOrConnectWithoutSharesInputSchema'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'

export const InboxCreateNestedOneWithoutSharesInputSchema: z.ZodType<Prisma.InboxCreateNestedOneWithoutSharesInput> = z
    .object({
        create: z
            .union([z.lazy(() => InboxCreateWithoutSharesInputSchema), z.lazy(() => InboxUncheckedCreateWithoutSharesInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => InboxCreateOrConnectWithoutSharesInputSchema).optional(),
        connect: z.lazy(() => InboxWhereUniqueInputSchema).optional()
    })
    .strict()

export default InboxCreateNestedOneWithoutSharesInputSchema
