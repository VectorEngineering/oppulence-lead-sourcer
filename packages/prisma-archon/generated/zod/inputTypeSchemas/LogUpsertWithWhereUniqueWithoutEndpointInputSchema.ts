import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LogWhereUniqueInputSchema } from './LogWhereUniqueInputSchema'
import { LogUpdateWithoutEndpointInputSchema } from './LogUpdateWithoutEndpointInputSchema'
import { LogUncheckedUpdateWithoutEndpointInputSchema } from './LogUncheckedUpdateWithoutEndpointInputSchema'
import { LogCreateWithoutEndpointInputSchema } from './LogCreateWithoutEndpointInputSchema'
import { LogUncheckedCreateWithoutEndpointInputSchema } from './LogUncheckedCreateWithoutEndpointInputSchema'

export const LogUpsertWithWhereUniqueWithoutEndpointInputSchema: z.ZodType<Prisma.LogUpsertWithWhereUniqueWithoutEndpointInput> = z
    .object({
        where: z.lazy(() => LogWhereUniqueInputSchema),
        update: z.union([z.lazy(() => LogUpdateWithoutEndpointInputSchema), z.lazy(() => LogUncheckedUpdateWithoutEndpointInputSchema)]),
        create: z.union([z.lazy(() => LogCreateWithoutEndpointInputSchema), z.lazy(() => LogUncheckedCreateWithoutEndpointInputSchema)])
    })
    .strict()

export default LogUpsertWithWhereUniqueWithoutEndpointInputSchema
