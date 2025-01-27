import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'
import { ProgramUpdateWithoutPayoutsInputSchema } from './ProgramUpdateWithoutPayoutsInputSchema'
import { ProgramUncheckedUpdateWithoutPayoutsInputSchema } from './ProgramUncheckedUpdateWithoutPayoutsInputSchema'

export const ProgramUpdateToOneWithWhereWithoutPayoutsInputSchema: z.ZodType<Prisma.ProgramUpdateToOneWithWhereWithoutPayoutsInput> = z
    .object({
        where: z.lazy(() => ProgramWhereInputSchema).optional(),
        data: z.union([z.lazy(() => ProgramUpdateWithoutPayoutsInputSchema), z.lazy(() => ProgramUncheckedUpdateWithoutPayoutsInputSchema)])
    })
    .strict()

export default ProgramUpdateToOneWithWhereWithoutPayoutsInputSchema
