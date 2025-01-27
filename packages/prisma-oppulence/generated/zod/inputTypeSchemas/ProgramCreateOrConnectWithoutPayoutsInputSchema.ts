import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema'
import { ProgramCreateWithoutPayoutsInputSchema } from './ProgramCreateWithoutPayoutsInputSchema'
import { ProgramUncheckedCreateWithoutPayoutsInputSchema } from './ProgramUncheckedCreateWithoutPayoutsInputSchema'

export const ProgramCreateOrConnectWithoutPayoutsInputSchema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutPayoutsInput> = z
    .object({
        where: z.lazy(() => ProgramWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProgramCreateWithoutPayoutsInputSchema),
            z.lazy(() => ProgramUncheckedCreateWithoutPayoutsInputSchema)
        ])
    })
    .strict()

export default ProgramCreateOrConnectWithoutPayoutsInputSchema
