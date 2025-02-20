import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema'
import { CustomerCreateWithoutLinkInputSchema } from './CustomerCreateWithoutLinkInputSchema'
import { CustomerUncheckedCreateWithoutLinkInputSchema } from './CustomerUncheckedCreateWithoutLinkInputSchema'

export const CustomerCreateOrConnectWithoutLinkInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutLinkInput> = z
    .object({
        where: z.lazy(() => CustomerWhereUniqueInputSchema),
        create: z.union([z.lazy(() => CustomerCreateWithoutLinkInputSchema), z.lazy(() => CustomerUncheckedCreateWithoutLinkInputSchema)])
    })
    .strict()

export default CustomerCreateOrConnectWithoutLinkInputSchema
