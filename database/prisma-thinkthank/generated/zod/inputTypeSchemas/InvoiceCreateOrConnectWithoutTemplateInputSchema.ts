import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'
import { InvoiceCreateWithoutTemplateInputSchema } from './InvoiceCreateWithoutTemplateInputSchema'
import { InvoiceUncheckedCreateWithoutTemplateInputSchema } from './InvoiceUncheckedCreateWithoutTemplateInputSchema'

export const InvoiceCreateOrConnectWithoutTemplateInputSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutTemplateInput> = z
    .object({
        where: z.lazy(() => InvoiceWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => InvoiceCreateWithoutTemplateInputSchema),
            z.lazy(() => InvoiceUncheckedCreateWithoutTemplateInputSchema)
        ])
    })
    .strict()

export default InvoiceCreateOrConnectWithoutTemplateInputSchema
