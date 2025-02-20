import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema'
import { CustomerUpdateWithoutSalesInputSchema } from './CustomerUpdateWithoutSalesInputSchema'
import { CustomerUncheckedUpdateWithoutSalesInputSchema } from './CustomerUncheckedUpdateWithoutSalesInputSchema'

export const CustomerUpdateToOneWithWhereWithoutSalesInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutSalesInput> = z
    .object({
        where: z.lazy(() => CustomerWhereInputSchema).optional(),
        data: z.union([z.lazy(() => CustomerUpdateWithoutSalesInputSchema), z.lazy(() => CustomerUncheckedUpdateWithoutSalesInputSchema)])
    })
    .strict()

export default CustomerUpdateToOneWithWhereWithoutSalesInputSchema
