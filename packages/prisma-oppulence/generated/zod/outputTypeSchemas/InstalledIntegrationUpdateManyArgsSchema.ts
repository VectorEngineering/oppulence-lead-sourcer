import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InstalledIntegrationUpdateManyMutationInputSchema } from '../inputTypeSchemas/InstalledIntegrationUpdateManyMutationInputSchema'
import { InstalledIntegrationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/InstalledIntegrationUncheckedUpdateManyInputSchema'
import { InstalledIntegrationWhereInputSchema } from '../inputTypeSchemas/InstalledIntegrationWhereInputSchema'

export const InstalledIntegrationUpdateManyArgsSchema: z.ZodType<Prisma.InstalledIntegrationUpdateManyArgs> = z
    .object({
        data: z.union([InstalledIntegrationUpdateManyMutationInputSchema, InstalledIntegrationUncheckedUpdateManyInputSchema]),
        where: InstalledIntegrationWhereInputSchema.optional()
    })
    .strict()

export default InstalledIntegrationUpdateManyArgsSchema
