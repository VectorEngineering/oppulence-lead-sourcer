import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateWithoutDashboardInputSchema } from './LinkCreateWithoutDashboardInputSchema'
import { LinkUncheckedCreateWithoutDashboardInputSchema } from './LinkUncheckedCreateWithoutDashboardInputSchema'
import { LinkCreateOrConnectWithoutDashboardInputSchema } from './LinkCreateOrConnectWithoutDashboardInputSchema'
import { LinkUpsertWithoutDashboardInputSchema } from './LinkUpsertWithoutDashboardInputSchema'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkUpdateToOneWithWhereWithoutDashboardInputSchema } from './LinkUpdateToOneWithWhereWithoutDashboardInputSchema'
import { LinkUpdateWithoutDashboardInputSchema } from './LinkUpdateWithoutDashboardInputSchema'
import { LinkUncheckedUpdateWithoutDashboardInputSchema } from './LinkUncheckedUpdateWithoutDashboardInputSchema'

export const LinkUpdateOneWithoutDashboardNestedInputSchema: z.ZodType<Prisma.LinkUpdateOneWithoutDashboardNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => LinkCreateWithoutDashboardInputSchema), z.lazy(() => LinkUncheckedCreateWithoutDashboardInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutDashboardInputSchema).optional(),
        upsert: z.lazy(() => LinkUpsertWithoutDashboardInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => LinkWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => LinkWhereInputSchema)]).optional(),
        connect: z.lazy(() => LinkWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => LinkUpdateToOneWithWhereWithoutDashboardInputSchema),
                z.lazy(() => LinkUpdateWithoutDashboardInputSchema),
                z.lazy(() => LinkUncheckedUpdateWithoutDashboardInputSchema)
            ])
            .optional()
    })
    .strict()

export default LinkUpdateOneWithoutDashboardNestedInputSchema
