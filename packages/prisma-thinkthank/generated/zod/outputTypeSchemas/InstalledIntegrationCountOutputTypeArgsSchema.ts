import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InstalledIntegrationCountOutputTypeSelectSchema } from './InstalledIntegrationCountOutputTypeSelectSchema'

export const InstalledIntegrationCountOutputTypeArgsSchema: z.ZodType<Prisma.InstalledIntegrationCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => InstalledIntegrationCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default InstalledIntegrationCountOutputTypeSelectSchema
