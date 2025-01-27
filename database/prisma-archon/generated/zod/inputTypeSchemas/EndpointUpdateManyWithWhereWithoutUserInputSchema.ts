import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { EndpointScalarWhereInputSchema } from './EndpointScalarWhereInputSchema'
import { EndpointUpdateManyMutationInputSchema } from './EndpointUpdateManyMutationInputSchema'
import { EndpointUncheckedUpdateManyWithoutUserInputSchema } from './EndpointUncheckedUpdateManyWithoutUserInputSchema'

export const EndpointUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.EndpointUpdateManyWithWhereWithoutUserInput> = z
    .object({
        where: z.lazy(() => EndpointScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => EndpointUpdateManyMutationInputSchema),
            z.lazy(() => EndpointUncheckedUpdateManyWithoutUserInputSchema)
        ])
    })
    .strict()

export default EndpointUpdateManyWithWhereWithoutUserInputSchema
