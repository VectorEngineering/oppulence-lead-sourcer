import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'
import { InvoiceUpdateWithoutWorkspaceInputSchema } from './InvoiceUpdateWithoutWorkspaceInputSchema'
import { InvoiceUncheckedUpdateWithoutWorkspaceInputSchema } from './InvoiceUncheckedUpdateWithoutWorkspaceInputSchema'

export const InvoiceUpdateWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutWorkspaceInput> =
    z
        .object({
            where: z.lazy(() => InvoiceWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => InvoiceUpdateWithoutWorkspaceInputSchema),
                z.lazy(() => InvoiceUncheckedUpdateWithoutWorkspaceInputSchema)
            ])
        })
        .strict()

export default InvoiceUpdateWithWhereUniqueWithoutWorkspaceInputSchema
