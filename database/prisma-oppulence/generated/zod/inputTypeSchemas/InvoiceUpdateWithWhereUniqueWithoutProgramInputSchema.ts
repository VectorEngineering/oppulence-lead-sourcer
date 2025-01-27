import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'
import { InvoiceUpdateWithoutProgramInputSchema } from './InvoiceUpdateWithoutProgramInputSchema'
import { InvoiceUncheckedUpdateWithoutProgramInputSchema } from './InvoiceUncheckedUpdateWithoutProgramInputSchema'

export const InvoiceUpdateWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutProgramInput> = z
    .object({
        where: z.lazy(() => InvoiceWhereUniqueInputSchema),
        data: z.union([z.lazy(() => InvoiceUpdateWithoutProgramInputSchema), z.lazy(() => InvoiceUncheckedUpdateWithoutProgramInputSchema)])
    })
    .strict()

export default InvoiceUpdateWithWhereUniqueWithoutProgramInputSchema
