import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramUpdateWithoutResourcesInputSchema } from './ProgramUpdateWithoutResourcesInputSchema'
import { ProgramUncheckedUpdateWithoutResourcesInputSchema } from './ProgramUncheckedUpdateWithoutResourcesInputSchema'
import { ProgramCreateWithoutResourcesInputSchema } from './ProgramCreateWithoutResourcesInputSchema'
import { ProgramUncheckedCreateWithoutResourcesInputSchema } from './ProgramUncheckedCreateWithoutResourcesInputSchema'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'

export const ProgramUpsertWithoutResourcesInputSchema: z.ZodType<Prisma.ProgramUpsertWithoutResourcesInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProgramUpdateWithoutResourcesInputSchema),
            z.lazy(() => ProgramUncheckedUpdateWithoutResourcesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProgramCreateWithoutResourcesInputSchema),
            z.lazy(() => ProgramUncheckedCreateWithoutResourcesInputSchema)
        ]),
        where: z.lazy(() => ProgramWhereInputSchema).optional()
    })
    .strict()

export default ProgramUpsertWithoutResourcesInputSchema
