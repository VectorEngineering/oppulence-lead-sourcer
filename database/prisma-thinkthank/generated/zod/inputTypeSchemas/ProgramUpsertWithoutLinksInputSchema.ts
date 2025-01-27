import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramUpdateWithoutLinksInputSchema } from './ProgramUpdateWithoutLinksInputSchema'
import { ProgramUncheckedUpdateWithoutLinksInputSchema } from './ProgramUncheckedUpdateWithoutLinksInputSchema'
import { ProgramCreateWithoutLinksInputSchema } from './ProgramCreateWithoutLinksInputSchema'
import { ProgramUncheckedCreateWithoutLinksInputSchema } from './ProgramUncheckedCreateWithoutLinksInputSchema'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'

export const ProgramUpsertWithoutLinksInputSchema: z.ZodType<Prisma.ProgramUpsertWithoutLinksInput> = z
    .object({
        update: z.union([z.lazy(() => ProgramUpdateWithoutLinksInputSchema), z.lazy(() => ProgramUncheckedUpdateWithoutLinksInputSchema)]),
        create: z.union([z.lazy(() => ProgramCreateWithoutLinksInputSchema), z.lazy(() => ProgramUncheckedCreateWithoutLinksInputSchema)]),
        where: z.lazy(() => ProgramWhereInputSchema).optional()
    })
    .strict()

export default ProgramUpsertWithoutLinksInputSchema
