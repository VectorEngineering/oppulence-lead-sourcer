import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { EndpointWhereUniqueInputSchema } from './EndpointWhereUniqueInputSchema'
import { EndpointCreateWithoutLeadsInputSchema } from './EndpointCreateWithoutLeadsInputSchema'
import { EndpointUncheckedCreateWithoutLeadsInputSchema } from './EndpointUncheckedCreateWithoutLeadsInputSchema'

export const EndpointCreateOrConnectWithoutLeadsInputSchema: z.ZodType<Prisma.EndpointCreateOrConnectWithoutLeadsInput> = z
    .object({
        where: z.lazy(() => EndpointWhereUniqueInputSchema),
        create: z.union([z.lazy(() => EndpointCreateWithoutLeadsInputSchema), z.lazy(() => EndpointUncheckedCreateWithoutLeadsInputSchema)])
    })
    .strict()

export default EndpointCreateOrConnectWithoutLeadsInputSchema
