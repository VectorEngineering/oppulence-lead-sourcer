import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'
import { LinkUpdateWithoutCustomersInputSchema } from './LinkUpdateWithoutCustomersInputSchema'
import { LinkUncheckedUpdateWithoutCustomersInputSchema } from './LinkUncheckedUpdateWithoutCustomersInputSchema'

export const LinkUpdateToOneWithWhereWithoutCustomersInputSchema: z.ZodType<Prisma.LinkUpdateToOneWithWhereWithoutCustomersInput> = z
    .object({
        where: z.lazy(() => LinkWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LinkUpdateWithoutCustomersInputSchema), z.lazy(() => LinkUncheckedUpdateWithoutCustomersInputSchema)])
    })
    .strict()

export default LinkUpdateToOneWithWhereWithoutCustomersInputSchema
