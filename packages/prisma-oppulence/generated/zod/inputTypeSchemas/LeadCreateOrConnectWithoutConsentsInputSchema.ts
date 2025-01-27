import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutConsentsInputSchema } from './LeadCreateWithoutConsentsInputSchema'
import { LeadUncheckedCreateWithoutConsentsInputSchema } from './LeadUncheckedCreateWithoutConsentsInputSchema'

export const LeadCreateOrConnectWithoutConsentsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutConsentsInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LeadCreateWithoutConsentsInputSchema), z.lazy(() => LeadUncheckedCreateWithoutConsentsInputSchema)])
    })
    .strict()

export default LeadCreateOrConnectWithoutConsentsInputSchema
