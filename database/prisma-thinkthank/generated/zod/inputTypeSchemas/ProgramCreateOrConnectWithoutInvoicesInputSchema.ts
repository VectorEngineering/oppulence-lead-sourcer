import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema'
import { ProgramCreateWithoutInvoicesInputSchema } from './ProgramCreateWithoutInvoicesInputSchema'
import { ProgramUncheckedCreateWithoutInvoicesInputSchema } from './ProgramUncheckedCreateWithoutInvoicesInputSchema'

export const ProgramCreateOrConnectWithoutInvoicesInputSchema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutInvoicesInput> = z
    .object({
        where: z.lazy(() => ProgramWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProgramCreateWithoutInvoicesInputSchema),
            z.lazy(() => ProgramUncheckedCreateWithoutInvoicesInputSchema)
        ])
    })
    .strict()

export default ProgramCreateOrConnectWithoutInvoicesInputSchema
