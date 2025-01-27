import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InstalledIntegrationWhereInputSchema } from '../inputTypeSchemas/InstalledIntegrationWhereInputSchema'

export const InstalledIntegrationDeleteManyArgsSchema: z.ZodType<Prisma.InstalledIntegrationDeleteManyArgs> = z
    .object({
        where: InstalledIntegrationWhereInputSchema.optional()
    })
    .strict()

export default InstalledIntegrationDeleteManyArgsSchema
