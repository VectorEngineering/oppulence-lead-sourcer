import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkTagCreateWithoutLinkInputSchema } from './LinkTagCreateWithoutLinkInputSchema'
import { LinkTagUncheckedCreateWithoutLinkInputSchema } from './LinkTagUncheckedCreateWithoutLinkInputSchema'
import { LinkTagCreateOrConnectWithoutLinkInputSchema } from './LinkTagCreateOrConnectWithoutLinkInputSchema'
import { LinkTagCreateManyLinkInputEnvelopeSchema } from './LinkTagCreateManyLinkInputEnvelopeSchema'
import { LinkTagWhereUniqueInputSchema } from './LinkTagWhereUniqueInputSchema'

export const LinkTagUncheckedCreateNestedManyWithoutLinkInputSchema: z.ZodType<Prisma.LinkTagUncheckedCreateNestedManyWithoutLinkInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LinkTagCreateWithoutLinkInputSchema),
                z.lazy(() => LinkTagCreateWithoutLinkInputSchema).array(),
                z.lazy(() => LinkTagUncheckedCreateWithoutLinkInputSchema),
                z.lazy(() => LinkTagUncheckedCreateWithoutLinkInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LinkTagCreateOrConnectWithoutLinkInputSchema),
                z.lazy(() => LinkTagCreateOrConnectWithoutLinkInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LinkTagCreateManyLinkInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => LinkTagWhereUniqueInputSchema), z.lazy(() => LinkTagWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default LinkTagUncheckedCreateNestedManyWithoutLinkInputSchema
