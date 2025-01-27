import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema'
import { CustomerUpdateWithoutLinkInputSchema } from './CustomerUpdateWithoutLinkInputSchema'
import { CustomerUncheckedUpdateWithoutLinkInputSchema } from './CustomerUncheckedUpdateWithoutLinkInputSchema'
import { CustomerCreateWithoutLinkInputSchema } from './CustomerCreateWithoutLinkInputSchema'
import { CustomerUncheckedCreateWithoutLinkInputSchema } from './CustomerUncheckedCreateWithoutLinkInputSchema'

export const CustomerUpsertWithWhereUniqueWithoutLinkInputSchema: z.ZodType<Prisma.CustomerUpsertWithWhereUniqueWithoutLinkInput> = z
    .object({
        where: z.lazy(() => CustomerWhereUniqueInputSchema),
        update: z.union([z.lazy(() => CustomerUpdateWithoutLinkInputSchema), z.lazy(() => CustomerUncheckedUpdateWithoutLinkInputSchema)]),
        create: z.union([z.lazy(() => CustomerCreateWithoutLinkInputSchema), z.lazy(() => CustomerUncheckedCreateWithoutLinkInputSchema)])
    })
    .strict()

export default CustomerUpsertWithWhereUniqueWithoutLinkInputSchema
