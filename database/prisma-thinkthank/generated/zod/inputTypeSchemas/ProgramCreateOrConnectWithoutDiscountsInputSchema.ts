import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema'
import { ProgramCreateWithoutDiscountsInputSchema } from './ProgramCreateWithoutDiscountsInputSchema'
import { ProgramUncheckedCreateWithoutDiscountsInputSchema } from './ProgramUncheckedCreateWithoutDiscountsInputSchema'

export const ProgramCreateOrConnectWithoutDiscountsInputSchema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutDiscountsInput> = z
    .object({
        where: z.lazy(() => ProgramWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProgramCreateWithoutDiscountsInputSchema),
            z.lazy(() => ProgramUncheckedCreateWithoutDiscountsInputSchema)
        ])
    })
    .strict()

export default ProgramCreateOrConnectWithoutDiscountsInputSchema
