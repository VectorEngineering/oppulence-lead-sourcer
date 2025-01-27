import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { EndpointWhereUniqueInputSchema } from './EndpointWhereUniqueInputSchema'
import { EndpointUpdateWithoutUserInputSchema } from './EndpointUpdateWithoutUserInputSchema'
import { EndpointUncheckedUpdateWithoutUserInputSchema } from './EndpointUncheckedUpdateWithoutUserInputSchema'
import { EndpointCreateWithoutUserInputSchema } from './EndpointCreateWithoutUserInputSchema'
import { EndpointUncheckedCreateWithoutUserInputSchema } from './EndpointUncheckedCreateWithoutUserInputSchema'

export const EndpointUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.EndpointUpsertWithWhereUniqueWithoutUserInput> = z
    .object({
        where: z.lazy(() => EndpointWhereUniqueInputSchema),
        update: z.union([z.lazy(() => EndpointUpdateWithoutUserInputSchema), z.lazy(() => EndpointUncheckedUpdateWithoutUserInputSchema)]),
        create: z.union([z.lazy(() => EndpointCreateWithoutUserInputSchema), z.lazy(() => EndpointUncheckedCreateWithoutUserInputSchema)])
    })
    .strict()

export default EndpointUpsertWithWhereUniqueWithoutUserInputSchema
