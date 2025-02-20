import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { EndpointUpdateWithoutLeadsInputSchema } from './EndpointUpdateWithoutLeadsInputSchema'
import { EndpointUncheckedUpdateWithoutLeadsInputSchema } from './EndpointUncheckedUpdateWithoutLeadsInputSchema'
import { EndpointCreateWithoutLeadsInputSchema } from './EndpointCreateWithoutLeadsInputSchema'
import { EndpointUncheckedCreateWithoutLeadsInputSchema } from './EndpointUncheckedCreateWithoutLeadsInputSchema'
import { EndpointWhereInputSchema } from './EndpointWhereInputSchema'

export const EndpointUpsertWithoutLeadsInputSchema: z.ZodType<Prisma.EndpointUpsertWithoutLeadsInput> = z
    .object({
        update: z.union([
            z.lazy(() => EndpointUpdateWithoutLeadsInputSchema),
            z.lazy(() => EndpointUncheckedUpdateWithoutLeadsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => EndpointCreateWithoutLeadsInputSchema),
            z.lazy(() => EndpointUncheckedCreateWithoutLeadsInputSchema)
        ]),
        where: z.lazy(() => EndpointWhereInputSchema).optional()
    })
    .strict()

export default EndpointUpsertWithoutLeadsInputSchema
