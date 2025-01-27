import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereInputSchema } from './DealWhereInputSchema'
import { DealUpdateWithoutProductsInputSchema } from './DealUpdateWithoutProductsInputSchema'
import { DealUncheckedUpdateWithoutProductsInputSchema } from './DealUncheckedUpdateWithoutProductsInputSchema'

export const DealUpdateToOneWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutProductsInput> = z
    .object({
        where: z.lazy(() => DealWhereInputSchema).optional(),
        data: z.union([z.lazy(() => DealUpdateWithoutProductsInputSchema), z.lazy(() => DealUncheckedUpdateWithoutProductsInputSchema)])
    })
    .strict()

export default DealUpdateToOneWithWhereWithoutProductsInputSchema
