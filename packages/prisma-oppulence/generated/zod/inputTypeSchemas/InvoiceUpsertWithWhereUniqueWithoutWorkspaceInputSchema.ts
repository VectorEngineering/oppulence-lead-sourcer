import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'
import { InvoiceUpdateWithoutWorkspaceInputSchema } from './InvoiceUpdateWithoutWorkspaceInputSchema'
import { InvoiceUncheckedUpdateWithoutWorkspaceInputSchema } from './InvoiceUncheckedUpdateWithoutWorkspaceInputSchema'
import { InvoiceCreateWithoutWorkspaceInputSchema } from './InvoiceCreateWithoutWorkspaceInputSchema'
import { InvoiceUncheckedCreateWithoutWorkspaceInputSchema } from './InvoiceUncheckedCreateWithoutWorkspaceInputSchema'

export const InvoiceUpsertWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutWorkspaceInput> =
    z
        .object({
            where: z.lazy(() => InvoiceWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => InvoiceUpdateWithoutWorkspaceInputSchema),
                z.lazy(() => InvoiceUncheckedUpdateWithoutWorkspaceInputSchema)
            ]),
            create: z.union([
                z.lazy(() => InvoiceCreateWithoutWorkspaceInputSchema),
                z.lazy(() => InvoiceUncheckedCreateWithoutWorkspaceInputSchema)
            ])
        })
        .strict()

export default InvoiceUpsertWithWhereUniqueWithoutWorkspaceInputSchema
