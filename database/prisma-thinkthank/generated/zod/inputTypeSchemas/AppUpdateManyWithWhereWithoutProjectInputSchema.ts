import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AppScalarWhereInputSchema } from './AppScalarWhereInputSchema'
import { AppUpdateManyMutationInputSchema } from './AppUpdateManyMutationInputSchema'
import { AppUncheckedUpdateManyWithoutProjectInputSchema } from './AppUncheckedUpdateManyWithoutProjectInputSchema'

export const AppUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.AppUpdateManyWithWhereWithoutProjectInput> = z
    .object({
        where: z.lazy(() => AppScalarWhereInputSchema),
        data: z.union([z.lazy(() => AppUpdateManyMutationInputSchema), z.lazy(() => AppUncheckedUpdateManyWithoutProjectInputSchema)])
    })
    .strict()

export default AppUpdateManyWithWhereWithoutProjectInputSchema
