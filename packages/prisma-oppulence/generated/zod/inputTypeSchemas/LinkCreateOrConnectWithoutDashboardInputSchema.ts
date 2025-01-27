import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkCreateWithoutDashboardInputSchema } from './LinkCreateWithoutDashboardInputSchema'
import { LinkUncheckedCreateWithoutDashboardInputSchema } from './LinkUncheckedCreateWithoutDashboardInputSchema'

export const LinkCreateOrConnectWithoutDashboardInputSchema: z.ZodType<Prisma.LinkCreateOrConnectWithoutDashboardInput> = z
    .object({
        where: z.lazy(() => LinkWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LinkCreateWithoutDashboardInputSchema), z.lazy(() => LinkUncheckedCreateWithoutDashboardInputSchema)])
    })
    .strict()

export default LinkCreateOrConnectWithoutDashboardInputSchema
