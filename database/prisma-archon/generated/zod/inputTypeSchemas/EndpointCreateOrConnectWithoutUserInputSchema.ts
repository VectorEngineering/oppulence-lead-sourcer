import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { EndpointWhereUniqueInputSchema } from './EndpointWhereUniqueInputSchema'
import { EndpointCreateWithoutUserInputSchema } from './EndpointCreateWithoutUserInputSchema'
import { EndpointUncheckedCreateWithoutUserInputSchema } from './EndpointUncheckedCreateWithoutUserInputSchema'

export const EndpointCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.EndpointCreateOrConnectWithoutUserInput> = z
    .object({
        where: z.lazy(() => EndpointWhereUniqueInputSchema),
        create: z.union([z.lazy(() => EndpointCreateWithoutUserInputSchema), z.lazy(() => EndpointUncheckedCreateWithoutUserInputSchema)])
    })
    .strict()

export default EndpointCreateOrConnectWithoutUserInputSchema
