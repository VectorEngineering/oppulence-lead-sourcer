import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CustomerTagScalarWhereInputSchema } from './CustomerTagScalarWhereInputSchema'
import { CustomerTagUpdateManyMutationInputSchema } from './CustomerTagUpdateManyMutationInputSchema'
import { CustomerTagUncheckedUpdateManyWithoutTagInputSchema } from './CustomerTagUncheckedUpdateManyWithoutTagInputSchema'

export const CustomerTagUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.CustomerTagUpdateManyWithWhereWithoutTagInput> = z
    .object({
        where: z.lazy(() => CustomerTagScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => CustomerTagUpdateManyMutationInputSchema),
            z.lazy(() => CustomerTagUncheckedUpdateManyWithoutTagInputSchema)
        ])
    })
    .strict()

export default CustomerTagUpdateManyWithWhereWithoutTagInputSchema
