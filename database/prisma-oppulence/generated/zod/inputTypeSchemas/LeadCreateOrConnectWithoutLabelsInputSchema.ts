import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutLabelsInputSchema } from './LeadCreateWithoutLabelsInputSchema'
import { LeadUncheckedCreateWithoutLabelsInputSchema } from './LeadUncheckedCreateWithoutLabelsInputSchema'

export const LeadCreateOrConnectWithoutLabelsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutLabelsInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LeadCreateWithoutLabelsInputSchema), z.lazy(() => LeadUncheckedCreateWithoutLabelsInputSchema)])
    })
    .strict()

export default LeadCreateOrConnectWithoutLabelsInputSchema
