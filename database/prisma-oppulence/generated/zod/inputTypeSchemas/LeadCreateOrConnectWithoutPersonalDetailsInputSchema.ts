import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutPersonalDetailsInputSchema } from './LeadCreateWithoutPersonalDetailsInputSchema'
import { LeadUncheckedCreateWithoutPersonalDetailsInputSchema } from './LeadUncheckedCreateWithoutPersonalDetailsInputSchema'

export const LeadCreateOrConnectWithoutPersonalDetailsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutPersonalDetailsInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LeadCreateWithoutPersonalDetailsInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutPersonalDetailsInputSchema)
        ])
    })
    .strict()

export default LeadCreateOrConnectWithoutPersonalDetailsInputSchema
