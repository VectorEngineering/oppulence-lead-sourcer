import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramUpdateWithoutInvoicesInputSchema } from './ProgramUpdateWithoutInvoicesInputSchema'
import { ProgramUncheckedUpdateWithoutInvoicesInputSchema } from './ProgramUncheckedUpdateWithoutInvoicesInputSchema'
import { ProgramCreateWithoutInvoicesInputSchema } from './ProgramCreateWithoutInvoicesInputSchema'
import { ProgramUncheckedCreateWithoutInvoicesInputSchema } from './ProgramUncheckedCreateWithoutInvoicesInputSchema'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'

export const ProgramUpsertWithoutInvoicesInputSchema: z.ZodType<Prisma.ProgramUpsertWithoutInvoicesInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProgramUpdateWithoutInvoicesInputSchema),
            z.lazy(() => ProgramUncheckedUpdateWithoutInvoicesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProgramCreateWithoutInvoicesInputSchema),
            z.lazy(() => ProgramUncheckedCreateWithoutInvoicesInputSchema)
        ]),
        where: z.lazy(() => ProgramWhereInputSchema).optional()
    })
    .strict()

export default ProgramUpsertWithoutInvoicesInputSchema
