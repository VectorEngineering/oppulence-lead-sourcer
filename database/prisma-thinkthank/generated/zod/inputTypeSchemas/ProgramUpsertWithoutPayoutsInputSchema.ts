import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramUpdateWithoutPayoutsInputSchema } from './ProgramUpdateWithoutPayoutsInputSchema'
import { ProgramUncheckedUpdateWithoutPayoutsInputSchema } from './ProgramUncheckedUpdateWithoutPayoutsInputSchema'
import { ProgramCreateWithoutPayoutsInputSchema } from './ProgramCreateWithoutPayoutsInputSchema'
import { ProgramUncheckedCreateWithoutPayoutsInputSchema } from './ProgramUncheckedCreateWithoutPayoutsInputSchema'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'

export const ProgramUpsertWithoutPayoutsInputSchema: z.ZodType<Prisma.ProgramUpsertWithoutPayoutsInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProgramUpdateWithoutPayoutsInputSchema),
            z.lazy(() => ProgramUncheckedUpdateWithoutPayoutsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProgramCreateWithoutPayoutsInputSchema),
            z.lazy(() => ProgramUncheckedCreateWithoutPayoutsInputSchema)
        ]),
        where: z.lazy(() => ProgramWhereInputSchema).optional()
    })
    .strict()

export default ProgramUpsertWithoutPayoutsInputSchema
