import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'
import { ProgramUpdateWithoutApplicationsInputSchema } from './ProgramUpdateWithoutApplicationsInputSchema'
import { ProgramUncheckedUpdateWithoutApplicationsInputSchema } from './ProgramUncheckedUpdateWithoutApplicationsInputSchema'

export const ProgramUpdateToOneWithWhereWithoutApplicationsInputSchema: z.ZodType<Prisma.ProgramUpdateToOneWithWhereWithoutApplicationsInput> =
    z
        .object({
            where: z.lazy(() => ProgramWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ProgramUpdateWithoutApplicationsInputSchema),
                z.lazy(() => ProgramUncheckedUpdateWithoutApplicationsInputSchema)
            ])
        })
        .strict()

export default ProgramUpdateToOneWithWhereWithoutApplicationsInputSchema
