import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCountOutputTypeSelectSchema } from './LeadCountOutputTypeSelectSchema'

export const LeadCountOutputTypeArgsSchema: z.ZodType<Prisma.LeadCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default LeadCountOutputTypeSelectSchema
