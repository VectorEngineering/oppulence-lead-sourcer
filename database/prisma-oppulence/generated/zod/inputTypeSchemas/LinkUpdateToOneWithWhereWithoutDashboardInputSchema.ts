import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'
import { LinkUpdateWithoutDashboardInputSchema } from './LinkUpdateWithoutDashboardInputSchema'
import { LinkUncheckedUpdateWithoutDashboardInputSchema } from './LinkUncheckedUpdateWithoutDashboardInputSchema'

export const LinkUpdateToOneWithWhereWithoutDashboardInputSchema: z.ZodType<Prisma.LinkUpdateToOneWithWhereWithoutDashboardInput> = z
    .object({
        where: z.lazy(() => LinkWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LinkUpdateWithoutDashboardInputSchema), z.lazy(() => LinkUncheckedUpdateWithoutDashboardInputSchema)])
    })
    .strict()

export default LinkUpdateToOneWithWhereWithoutDashboardInputSchema
