import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramResourceScalarWhereInputSchema } from './ProgramResourceScalarWhereInputSchema'
import { ProgramResourceUpdateManyMutationInputSchema } from './ProgramResourceUpdateManyMutationInputSchema'
import { ProgramResourceUncheckedUpdateManyWithoutProgramInputSchema } from './ProgramResourceUncheckedUpdateManyWithoutProgramInputSchema'

export const ProgramResourceUpdateManyWithWhereWithoutProgramInputSchema: z.ZodType<Prisma.ProgramResourceUpdateManyWithWhereWithoutProgramInput> =
    z
        .object({
            where: z.lazy(() => ProgramResourceScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ProgramResourceUpdateManyMutationInputSchema),
                z.lazy(() => ProgramResourceUncheckedUpdateManyWithoutProgramInputSchema)
            ])
        })
        .strict()

export default ProgramResourceUpdateManyWithWhereWithoutProgramInputSchema
