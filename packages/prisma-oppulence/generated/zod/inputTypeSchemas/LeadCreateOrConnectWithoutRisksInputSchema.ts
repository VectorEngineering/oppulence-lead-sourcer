import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutRisksInputSchema } from './LeadCreateWithoutRisksInputSchema'
import { LeadUncheckedCreateWithoutRisksInputSchema } from './LeadUncheckedCreateWithoutRisksInputSchema'

export const LeadCreateOrConnectWithoutRisksInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutRisksInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LeadCreateWithoutRisksInputSchema), z.lazy(() => LeadUncheckedCreateWithoutRisksInputSchema)])
    })
    .strict()

export default LeadCreateOrConnectWithoutRisksInputSchema
