import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { EndpointWhereInputSchema } from './EndpointWhereInputSchema'
import { EndpointUpdateWithoutLeadsInputSchema } from './EndpointUpdateWithoutLeadsInputSchema'
import { EndpointUncheckedUpdateWithoutLeadsInputSchema } from './EndpointUncheckedUpdateWithoutLeadsInputSchema'

export const EndpointUpdateToOneWithWhereWithoutLeadsInputSchema: z.ZodType<Prisma.EndpointUpdateToOneWithWhereWithoutLeadsInput> = z
    .object({
        where: z.lazy(() => EndpointWhereInputSchema).optional(),
        data: z.union([z.lazy(() => EndpointUpdateWithoutLeadsInputSchema), z.lazy(() => EndpointUncheckedUpdateWithoutLeadsInputSchema)])
    })
    .strict()

export default EndpointUpdateToOneWithWhereWithoutLeadsInputSchema
