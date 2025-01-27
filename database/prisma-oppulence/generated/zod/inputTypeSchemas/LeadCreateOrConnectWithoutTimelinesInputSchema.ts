import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutTimelinesInputSchema } from './LeadCreateWithoutTimelinesInputSchema'
import { LeadUncheckedCreateWithoutTimelinesInputSchema } from './LeadUncheckedCreateWithoutTimelinesInputSchema'

export const LeadCreateOrConnectWithoutTimelinesInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutTimelinesInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LeadCreateWithoutTimelinesInputSchema), z.lazy(() => LeadUncheckedCreateWithoutTimelinesInputSchema)])
    })
    .strict()

export default LeadCreateOrConnectWithoutTimelinesInputSchema
