import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'
import { InvoiceUpdateWithoutTemplateInputSchema } from './InvoiceUpdateWithoutTemplateInputSchema'
import { InvoiceUncheckedUpdateWithoutTemplateInputSchema } from './InvoiceUncheckedUpdateWithoutTemplateInputSchema'

export const InvoiceUpdateWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutTemplateInput> = z
    .object({
        where: z.lazy(() => InvoiceWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => InvoiceUpdateWithoutTemplateInputSchema),
            z.lazy(() => InvoiceUncheckedUpdateWithoutTemplateInputSchema)
        ])
    })
    .strict()

export default InvoiceUpdateWithWhereUniqueWithoutTemplateInputSchema
