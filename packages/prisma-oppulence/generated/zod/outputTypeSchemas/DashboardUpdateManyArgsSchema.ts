import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DashboardUpdateManyMutationInputSchema } from '../inputTypeSchemas/DashboardUpdateManyMutationInputSchema'
import { DashboardUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DashboardUncheckedUpdateManyInputSchema'
import { DashboardWhereInputSchema } from '../inputTypeSchemas/DashboardWhereInputSchema'

export const DashboardUpdateManyArgsSchema: z.ZodType<Prisma.DashboardUpdateManyArgs> = z
    .object({
        data: z.union([DashboardUpdateManyMutationInputSchema, DashboardUncheckedUpdateManyInputSchema]),
        where: DashboardWhereInputSchema.optional()
    })
    .strict()

export default DashboardUpdateManyArgsSchema
