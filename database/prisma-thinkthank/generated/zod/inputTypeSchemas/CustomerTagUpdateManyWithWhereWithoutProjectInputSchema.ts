import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerTagScalarWhereInputSchema } from './CustomerTagScalarWhereInputSchema'
import { CustomerTagUpdateManyMutationInputSchema } from './CustomerTagUpdateManyMutationInputSchema'
import { CustomerTagUncheckedUpdateManyWithoutProjectInputSchema } from './CustomerTagUncheckedUpdateManyWithoutProjectInputSchema'

export const CustomerTagUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.CustomerTagUpdateManyWithWhereWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => CustomerTagScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => CustomerTagUpdateManyMutationInputSchema),
                z.lazy(() => CustomerTagUncheckedUpdateManyWithoutProjectInputSchema)
            ])
        })
        .strict()

export default CustomerTagUpdateManyWithWhereWithoutProjectInputSchema
