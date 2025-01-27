import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramCreateWithoutInvoicesInputSchema } from './ProgramCreateWithoutInvoicesInputSchema'
import { ProgramUncheckedCreateWithoutInvoicesInputSchema } from './ProgramUncheckedCreateWithoutInvoicesInputSchema'
import { ProgramCreateOrConnectWithoutInvoicesInputSchema } from './ProgramCreateOrConnectWithoutInvoicesInputSchema'
import { ProgramUpsertWithoutInvoicesInputSchema } from './ProgramUpsertWithoutInvoicesInputSchema'
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema'
import { ProgramUpdateToOneWithWhereWithoutInvoicesInputSchema } from './ProgramUpdateToOneWithWhereWithoutInvoicesInputSchema'
import { ProgramUpdateWithoutInvoicesInputSchema } from './ProgramUpdateWithoutInvoicesInputSchema'
import { ProgramUncheckedUpdateWithoutInvoicesInputSchema } from './ProgramUncheckedUpdateWithoutInvoicesInputSchema'

export const ProgramUpdateOneRequiredWithoutInvoicesNestedInputSchema: z.ZodType<Prisma.ProgramUpdateOneRequiredWithoutInvoicesNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProgramCreateWithoutInvoicesInputSchema),
                    z.lazy(() => ProgramUncheckedCreateWithoutInvoicesInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutInvoicesInputSchema).optional(),
            upsert: z.lazy(() => ProgramUpsertWithoutInvoicesInputSchema).optional(),
            connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ProgramUpdateToOneWithWhereWithoutInvoicesInputSchema),
                    z.lazy(() => ProgramUpdateWithoutInvoicesInputSchema),
                    z.lazy(() => ProgramUncheckedUpdateWithoutInvoicesInputSchema)
                ])
                .optional()
        })
        .strict()

export default ProgramUpdateOneRequiredWithoutInvoicesNestedInputSchema
