import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'
import { InvoiceCreateWithoutCommentsInputSchema } from './InvoiceCreateWithoutCommentsInputSchema'
import { InvoiceUncheckedCreateWithoutCommentsInputSchema } from './InvoiceUncheckedCreateWithoutCommentsInputSchema'

export const InvoiceCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutCommentsInput> = z
    .object({
        where: z.lazy(() => InvoiceWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => InvoiceCreateWithoutCommentsInputSchema),
            z.lazy(() => InvoiceUncheckedCreateWithoutCommentsInputSchema)
        ])
    })
    .strict()

export default InvoiceCreateOrConnectWithoutCommentsInputSchema
