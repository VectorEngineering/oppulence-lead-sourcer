import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramUpdateWithoutPartnersInputSchema } from './ProgramUpdateWithoutPartnersInputSchema'
import { ProgramUncheckedUpdateWithoutPartnersInputSchema } from './ProgramUncheckedUpdateWithoutPartnersInputSchema'
import { ProgramCreateWithoutPartnersInputSchema } from './ProgramCreateWithoutPartnersInputSchema'
import { ProgramUncheckedCreateWithoutPartnersInputSchema } from './ProgramUncheckedCreateWithoutPartnersInputSchema'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'

export const ProgramUpsertWithoutPartnersInputSchema: z.ZodType<Prisma.ProgramUpsertWithoutPartnersInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProgramUpdateWithoutPartnersInputSchema),
            z.lazy(() => ProgramUncheckedUpdateWithoutPartnersInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProgramCreateWithoutPartnersInputSchema),
            z.lazy(() => ProgramUncheckedCreateWithoutPartnersInputSchema)
        ]),
        where: z.lazy(() => ProgramWhereInputSchema).optional()
    })
    .strict()

export default ProgramUpsertWithoutPartnersInputSchema
