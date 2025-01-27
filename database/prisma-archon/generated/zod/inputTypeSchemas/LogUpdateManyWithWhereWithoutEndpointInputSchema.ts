import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LogScalarWhereInputSchema } from './LogScalarWhereInputSchema'
import { LogUpdateManyMutationInputSchema } from './LogUpdateManyMutationInputSchema'
import { LogUncheckedUpdateManyWithoutEndpointInputSchema } from './LogUncheckedUpdateManyWithoutEndpointInputSchema'

export const LogUpdateManyWithWhereWithoutEndpointInputSchema: z.ZodType<Prisma.LogUpdateManyWithWhereWithoutEndpointInput> = z
    .object({
        where: z.lazy(() => LogScalarWhereInputSchema),
        data: z.union([z.lazy(() => LogUpdateManyMutationInputSchema), z.lazy(() => LogUncheckedUpdateManyWithoutEndpointInputSchema)])
    })
    .strict()

export default LogUpdateManyWithWhereWithoutEndpointInputSchema
