import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DashboardWhereInputSchema } from '../inputTypeSchemas/DashboardWhereInputSchema'

export const DashboardDeleteManyArgsSchema: z.ZodType<Prisma.DashboardDeleteManyArgs> = z
    .object({
        where: DashboardWhereInputSchema.optional()
    })
    .strict()

export default DashboardDeleteManyArgsSchema
