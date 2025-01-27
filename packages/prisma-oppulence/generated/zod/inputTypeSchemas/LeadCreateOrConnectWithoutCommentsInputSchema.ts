import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutCommentsInputSchema } from './LeadCreateWithoutCommentsInputSchema'
import { LeadUncheckedCreateWithoutCommentsInputSchema } from './LeadUncheckedCreateWithoutCommentsInputSchema'

export const LeadCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutCommentsInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LeadCreateWithoutCommentsInputSchema), z.lazy(() => LeadUncheckedCreateWithoutCommentsInputSchema)])
    })
    .strict()

export default LeadCreateOrConnectWithoutCommentsInputSchema
