import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutProjectInputSchema } from './LeadCreateWithoutProjectInputSchema'
import { LeadUncheckedCreateWithoutProjectInputSchema } from './LeadUncheckedCreateWithoutProjectInputSchema'

export const LeadCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LeadCreateWithoutProjectInputSchema), z.lazy(() => LeadUncheckedCreateWithoutProjectInputSchema)])
    })
    .strict()

export default LeadCreateOrConnectWithoutProjectInputSchema
