import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthAppCountOutputTypeSelectSchema } from './OAuthAppCountOutputTypeSelectSchema'

export const OAuthAppCountOutputTypeArgsSchema: z.ZodType<Prisma.OAuthAppCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => OAuthAppCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default OAuthAppCountOutputTypeSelectSchema
