import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSegmentationCountOutputTypeSelectSchema } from './LeadSegmentationCountOutputTypeSelectSchema'

export const LeadSegmentationCountOutputTypeArgsSchema: z.ZodType<Prisma.LeadSegmentationCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadSegmentationCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default LeadSegmentationCountOutputTypeSelectSchema
