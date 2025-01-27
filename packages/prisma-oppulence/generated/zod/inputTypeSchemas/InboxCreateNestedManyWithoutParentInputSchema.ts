import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateWithoutParentInputSchema } from './InboxCreateWithoutParentInputSchema'
import { InboxUncheckedCreateWithoutParentInputSchema } from './InboxUncheckedCreateWithoutParentInputSchema'
import { InboxCreateOrConnectWithoutParentInputSchema } from './InboxCreateOrConnectWithoutParentInputSchema'
import { InboxCreateManyParentInputEnvelopeSchema } from './InboxCreateManyParentInputEnvelopeSchema'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'

export const InboxCreateNestedManyWithoutParentInputSchema: z.ZodType<Prisma.InboxCreateNestedManyWithoutParentInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => InboxCreateWithoutParentInputSchema),
                z.lazy(() => InboxCreateWithoutParentInputSchema).array(),
                z.lazy(() => InboxUncheckedCreateWithoutParentInputSchema),
                z.lazy(() => InboxUncheckedCreateWithoutParentInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InboxCreateOrConnectWithoutParentInputSchema),
                z.lazy(() => InboxCreateOrConnectWithoutParentInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => InboxCreateManyParentInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default InboxCreateNestedManyWithoutParentInputSchema
