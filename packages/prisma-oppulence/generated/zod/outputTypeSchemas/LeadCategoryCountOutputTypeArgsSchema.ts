import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCategoryCountOutputTypeSelectSchema } from './LeadCategoryCountOutputTypeSelectSchema'

export const LeadCategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.LeadCategoryCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadCategoryCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default LeadCategoryCountOutputTypeSelectSchema
