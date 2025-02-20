import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema'
import { ProgramCreateWithoutSalesInputSchema } from './ProgramCreateWithoutSalesInputSchema'
import { ProgramUncheckedCreateWithoutSalesInputSchema } from './ProgramUncheckedCreateWithoutSalesInputSchema'

export const ProgramCreateOrConnectWithoutSalesInputSchema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutSalesInput> = z
    .object({
        where: z.lazy(() => ProgramWhereUniqueInputSchema),
        create: z.union([z.lazy(() => ProgramCreateWithoutSalesInputSchema), z.lazy(() => ProgramUncheckedCreateWithoutSalesInputSchema)])
    })
    .strict()

export default ProgramCreateOrConnectWithoutSalesInputSchema
