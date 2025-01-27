import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkUpdateWithoutCustomersInputSchema } from './LinkUpdateWithoutCustomersInputSchema'
import { LinkUncheckedUpdateWithoutCustomersInputSchema } from './LinkUncheckedUpdateWithoutCustomersInputSchema'
import { LinkCreateWithoutCustomersInputSchema } from './LinkCreateWithoutCustomersInputSchema'
import { LinkUncheckedCreateWithoutCustomersInputSchema } from './LinkUncheckedCreateWithoutCustomersInputSchema'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'

export const LinkUpsertWithoutCustomersInputSchema: z.ZodType<Prisma.LinkUpsertWithoutCustomersInput> = z
    .object({
        update: z.union([
            z.lazy(() => LinkUpdateWithoutCustomersInputSchema),
            z.lazy(() => LinkUncheckedUpdateWithoutCustomersInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LinkCreateWithoutCustomersInputSchema),
            z.lazy(() => LinkUncheckedCreateWithoutCustomersInputSchema)
        ]),
        where: z.lazy(() => LinkWhereInputSchema).optional()
    })
    .strict()

export default LinkUpsertWithoutCustomersInputSchema
