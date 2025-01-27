import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealCountOutputTypeSelectSchema } from './DealCountOutputTypeSelectSchema'

export const DealCountOutputTypeArgsSchema: z.ZodType<Prisma.DealCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => DealCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default DealCountOutputTypeSelectSchema
