import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LogWhereUniqueInputSchema } from './LogWhereUniqueInputSchema'
import { LogUpdateWithoutEndpointInputSchema } from './LogUpdateWithoutEndpointInputSchema'
import { LogUncheckedUpdateWithoutEndpointInputSchema } from './LogUncheckedUpdateWithoutEndpointInputSchema'

export const LogUpdateWithWhereUniqueWithoutEndpointInputSchema: z.ZodType<Prisma.LogUpdateWithWhereUniqueWithoutEndpointInput> = z
    .object({
        where: z.lazy(() => LogWhereUniqueInputSchema),
        data: z.union([z.lazy(() => LogUpdateWithoutEndpointInputSchema), z.lazy(() => LogUncheckedUpdateWithoutEndpointInputSchema)])
    })
    .strict()

export default LogUpdateWithWhereUniqueWithoutEndpointInputSchema
