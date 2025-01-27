import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InstalledIntegrationSelectSchema } from '../inputTypeSchemas/InstalledIntegrationSelectSchema'
import { InstalledIntegrationIncludeSchema } from '../inputTypeSchemas/InstalledIntegrationIncludeSchema'

export const InstalledIntegrationArgsSchema: z.ZodType<Prisma.InstalledIntegrationDefaultArgs> = z
    .object({
        select: z.lazy(() => InstalledIntegrationSelectSchema).optional(),
        include: z.lazy(() => InstalledIntegrationIncludeSchema).optional()
    })
    .strict()

export default InstalledIntegrationArgsSchema
