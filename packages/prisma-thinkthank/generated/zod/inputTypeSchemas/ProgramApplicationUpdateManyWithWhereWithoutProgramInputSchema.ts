import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramApplicationScalarWhereInputSchema } from './ProgramApplicationScalarWhereInputSchema'
import { ProgramApplicationUpdateManyMutationInputSchema } from './ProgramApplicationUpdateManyMutationInputSchema'
import { ProgramApplicationUncheckedUpdateManyWithoutProgramInputSchema } from './ProgramApplicationUncheckedUpdateManyWithoutProgramInputSchema'

export const ProgramApplicationUpdateManyWithWhereWithoutProgramInputSchema: z.ZodType<Prisma.ProgramApplicationUpdateManyWithWhereWithoutProgramInput> =
    z
        .object({
            where: z.lazy(() => ProgramApplicationScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ProgramApplicationUpdateManyMutationInputSchema),
                z.lazy(() => ProgramApplicationUncheckedUpdateManyWithoutProgramInputSchema)
            ])
        })
        .strict()

export default ProgramApplicationUpdateManyWithWhereWithoutProgramInputSchema
