import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleScalarWhereInputSchema } from './SaleScalarWhereInputSchema'
import { SaleUpdateManyMutationInputSchema } from './SaleUpdateManyMutationInputSchema'
import { SaleUncheckedUpdateManyWithoutProgramInputSchema } from './SaleUncheckedUpdateManyWithoutProgramInputSchema'

export const SaleUpdateManyWithWhereWithoutProgramInputSchema: z.ZodType<Prisma.SaleUpdateManyWithWhereWithoutProgramInput> = z
    .object({
        where: z.lazy(() => SaleScalarWhereInputSchema),
        data: z.union([z.lazy(() => SaleUpdateManyMutationInputSchema), z.lazy(() => SaleUncheckedUpdateManyWithoutProgramInputSchema)])
    })
    .strict()

export default SaleUpdateManyWithWhereWithoutProgramInputSchema
