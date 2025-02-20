import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateWithoutChildrenInputSchema } from './InboxCreateWithoutChildrenInputSchema'
import { InboxUncheckedCreateWithoutChildrenInputSchema } from './InboxUncheckedCreateWithoutChildrenInputSchema'
import { InboxCreateOrConnectWithoutChildrenInputSchema } from './InboxCreateOrConnectWithoutChildrenInputSchema'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'

export const InboxCreateNestedOneWithoutChildrenInputSchema: z.ZodType<Prisma.InboxCreateNestedOneWithoutChildrenInput> = z
    .object({
        create: z
            .union([z.lazy(() => InboxCreateWithoutChildrenInputSchema), z.lazy(() => InboxUncheckedCreateWithoutChildrenInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => InboxCreateOrConnectWithoutChildrenInputSchema).optional(),
        connect: z.lazy(() => InboxWhereUniqueInputSchema).optional()
    })
    .strict()

export default InboxCreateNestedOneWithoutChildrenInputSchema
