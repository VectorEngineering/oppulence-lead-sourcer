import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateWithoutEndpointInputSchema } from './LeadUpdateWithoutEndpointInputSchema'
import { LeadUncheckedUpdateWithoutEndpointInputSchema } from './LeadUncheckedUpdateWithoutEndpointInputSchema'

export const LeadUpdateWithWhereUniqueWithoutEndpointInputSchema: z.ZodType<Prisma.LeadUpdateWithWhereUniqueWithoutEndpointInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        data: z.union([z.lazy(() => LeadUpdateWithoutEndpointInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutEndpointInputSchema)])
    })
    .strict()

export default LeadUpdateWithWhereUniqueWithoutEndpointInputSchema
