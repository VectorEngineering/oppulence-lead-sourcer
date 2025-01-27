import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateWithoutEndpointInputSchema } from './LeadUpdateWithoutEndpointInputSchema'
import { LeadUncheckedUpdateWithoutEndpointInputSchema } from './LeadUncheckedUpdateWithoutEndpointInputSchema'
import { LeadCreateWithoutEndpointInputSchema } from './LeadCreateWithoutEndpointInputSchema'
import { LeadUncheckedCreateWithoutEndpointInputSchema } from './LeadUncheckedCreateWithoutEndpointInputSchema'

export const LeadUpsertWithWhereUniqueWithoutEndpointInputSchema: z.ZodType<Prisma.LeadUpsertWithWhereUniqueWithoutEndpointInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        update: z.union([z.lazy(() => LeadUpdateWithoutEndpointInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutEndpointInputSchema)]),
        create: z.union([z.lazy(() => LeadCreateWithoutEndpointInputSchema), z.lazy(() => LeadUncheckedCreateWithoutEndpointInputSchema)])
    })
    .strict()

export default LeadUpsertWithWhereUniqueWithoutEndpointInputSchema
