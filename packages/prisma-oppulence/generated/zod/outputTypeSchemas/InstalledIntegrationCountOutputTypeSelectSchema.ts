import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const InstalledIntegrationCountOutputTypeSelectSchema: z.ZodType<Prisma.InstalledIntegrationCountOutputTypeSelect> = z
    .object({
        refreshTokens: z.boolean().optional(),
        accessTokens: z.boolean().optional()
    })
    .strict()

export default InstalledIntegrationCountOutputTypeSelectSchema
