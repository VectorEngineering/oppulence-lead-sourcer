import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxCreateWithoutProjectInputSchema } from './InboxCreateWithoutProjectInputSchema'
import { InboxUncheckedCreateWithoutProjectInputSchema } from './InboxUncheckedCreateWithoutProjectInputSchema'
import { InboxCreateOrConnectWithoutProjectInputSchema } from './InboxCreateOrConnectWithoutProjectInputSchema'
import { InboxCreateManyProjectInputEnvelopeSchema } from './InboxCreateManyProjectInputEnvelopeSchema'
import { InboxWhereUniqueInputSchema } from './InboxWhereUniqueInputSchema'

export const InboxCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.InboxCreateNestedManyWithoutProjectInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => InboxCreateWithoutProjectInputSchema),
                z.lazy(() => InboxCreateWithoutProjectInputSchema).array(),
                z.lazy(() => InboxUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => InboxUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InboxCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => InboxCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => InboxCreateManyProjectInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => InboxWhereUniqueInputSchema), z.lazy(() => InboxWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default InboxCreateNestedManyWithoutProjectInputSchema
