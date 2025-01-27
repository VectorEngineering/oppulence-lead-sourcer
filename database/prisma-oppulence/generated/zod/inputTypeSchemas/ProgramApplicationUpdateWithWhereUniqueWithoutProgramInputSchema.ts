import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramApplicationWhereUniqueInputSchema } from './ProgramApplicationWhereUniqueInputSchema'
import { ProgramApplicationUpdateWithoutProgramInputSchema } from './ProgramApplicationUpdateWithoutProgramInputSchema'
import { ProgramApplicationUncheckedUpdateWithoutProgramInputSchema } from './ProgramApplicationUncheckedUpdateWithoutProgramInputSchema'

export const ProgramApplicationUpdateWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.ProgramApplicationUpdateWithWhereUniqueWithoutProgramInput> =
    z
        .object({
            where: z.lazy(() => ProgramApplicationWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => ProgramApplicationUpdateWithoutProgramInputSchema),
                z.lazy(() => ProgramApplicationUncheckedUpdateWithoutProgramInputSchema)
            ])
        })
        .strict()

export default ProgramApplicationUpdateWithWhereUniqueWithoutProgramInputSchema
