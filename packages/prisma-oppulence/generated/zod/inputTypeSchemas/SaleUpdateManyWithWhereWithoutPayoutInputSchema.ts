import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleScalarWhereInputSchema } from './SaleScalarWhereInputSchema'
import { SaleUpdateManyMutationInputSchema } from './SaleUpdateManyMutationInputSchema'
import { SaleUncheckedUpdateManyWithoutPayoutInputSchema } from './SaleUncheckedUpdateManyWithoutPayoutInputSchema'

export const SaleUpdateManyWithWhereWithoutPayoutInputSchema: z.ZodType<Prisma.SaleUpdateManyWithWhereWithoutPayoutInput> = z
    .object({
        where: z.lazy(() => SaleScalarWhereInputSchema),
        data: z.union([z.lazy(() => SaleUpdateManyMutationInputSchema), z.lazy(() => SaleUncheckedUpdateManyWithoutPayoutInputSchema)])
    })
    .strict()

export default SaleUpdateManyWithWhereWithoutPayoutInputSchema
