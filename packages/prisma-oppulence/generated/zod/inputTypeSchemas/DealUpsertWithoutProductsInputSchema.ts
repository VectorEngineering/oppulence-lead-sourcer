import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealUpdateWithoutProductsInputSchema } from './DealUpdateWithoutProductsInputSchema'
import { DealUncheckedUpdateWithoutProductsInputSchema } from './DealUncheckedUpdateWithoutProductsInputSchema'
import { DealCreateWithoutProductsInputSchema } from './DealCreateWithoutProductsInputSchema'
import { DealUncheckedCreateWithoutProductsInputSchema } from './DealUncheckedCreateWithoutProductsInputSchema'
import { DealWhereInputSchema } from './DealWhereInputSchema'

export const DealUpsertWithoutProductsInputSchema: z.ZodType<Prisma.DealUpsertWithoutProductsInput> = z
    .object({
        update: z.union([z.lazy(() => DealUpdateWithoutProductsInputSchema), z.lazy(() => DealUncheckedUpdateWithoutProductsInputSchema)]),
        create: z.union([z.lazy(() => DealCreateWithoutProductsInputSchema), z.lazy(() => DealUncheckedCreateWithoutProductsInputSchema)]),
        where: z.lazy(() => DealWhereInputSchema).optional()
    })
    .strict()

export default DealUpsertWithoutProductsInputSchema
