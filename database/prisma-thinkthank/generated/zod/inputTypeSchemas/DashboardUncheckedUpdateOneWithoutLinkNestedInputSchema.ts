import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DashboardCreateWithoutLinkInputSchema } from './DashboardCreateWithoutLinkInputSchema'
import { DashboardUncheckedCreateWithoutLinkInputSchema } from './DashboardUncheckedCreateWithoutLinkInputSchema'
import { DashboardCreateOrConnectWithoutLinkInputSchema } from './DashboardCreateOrConnectWithoutLinkInputSchema'
import { DashboardUpsertWithoutLinkInputSchema } from './DashboardUpsertWithoutLinkInputSchema'
import { DashboardWhereInputSchema } from './DashboardWhereInputSchema'
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema'
import { DashboardUpdateToOneWithWhereWithoutLinkInputSchema } from './DashboardUpdateToOneWithWhereWithoutLinkInputSchema'
import { DashboardUpdateWithoutLinkInputSchema } from './DashboardUpdateWithoutLinkInputSchema'
import { DashboardUncheckedUpdateWithoutLinkInputSchema } from './DashboardUncheckedUpdateWithoutLinkInputSchema'

export const DashboardUncheckedUpdateOneWithoutLinkNestedInputSchema: z.ZodType<Prisma.DashboardUncheckedUpdateOneWithoutLinkNestedInput> =
    z
        .object({
            create: z
                .union([z.lazy(() => DashboardCreateWithoutLinkInputSchema), z.lazy(() => DashboardUncheckedCreateWithoutLinkInputSchema)])
                .optional(),
            connectOrCreate: z.lazy(() => DashboardCreateOrConnectWithoutLinkInputSchema).optional(),
            upsert: z.lazy(() => DashboardUpsertWithoutLinkInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => DashboardWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => DashboardWhereInputSchema)]).optional(),
            connect: z.lazy(() => DashboardWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => DashboardUpdateToOneWithWhereWithoutLinkInputSchema),
                    z.lazy(() => DashboardUpdateWithoutLinkInputSchema),
                    z.lazy(() => DashboardUncheckedUpdateWithoutLinkInputSchema)
                ])
                .optional()
        })
        .strict()

export default DashboardUncheckedUpdateOneWithoutLinkNestedInputSchema
