import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DashboardWhereInputSchema } from './DashboardWhereInputSchema'
import { DashboardUpdateWithoutLinkInputSchema } from './DashboardUpdateWithoutLinkInputSchema'
import { DashboardUncheckedUpdateWithoutLinkInputSchema } from './DashboardUncheckedUpdateWithoutLinkInputSchema'

export const DashboardUpdateToOneWithWhereWithoutLinkInputSchema: z.ZodType<Prisma.DashboardUpdateToOneWithWhereWithoutLinkInput> = z
    .object({
        where: z.lazy(() => DashboardWhereInputSchema).optional(),
        data: z.union([z.lazy(() => DashboardUpdateWithoutLinkInputSchema), z.lazy(() => DashboardUncheckedUpdateWithoutLinkInputSchema)])
    })
    .strict()

export default DashboardUpdateToOneWithWhereWithoutLinkInputSchema
