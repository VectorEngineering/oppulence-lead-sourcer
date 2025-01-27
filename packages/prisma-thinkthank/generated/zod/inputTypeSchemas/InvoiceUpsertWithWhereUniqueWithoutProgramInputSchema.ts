import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'
import { InvoiceUpdateWithoutProgramInputSchema } from './InvoiceUpdateWithoutProgramInputSchema'
import { InvoiceUncheckedUpdateWithoutProgramInputSchema } from './InvoiceUncheckedUpdateWithoutProgramInputSchema'
import { InvoiceCreateWithoutProgramInputSchema } from './InvoiceCreateWithoutProgramInputSchema'
import { InvoiceUncheckedCreateWithoutProgramInputSchema } from './InvoiceUncheckedCreateWithoutProgramInputSchema'

export const InvoiceUpsertWithWhereUniqueWithoutProgramInputSchema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutProgramInput> = z
    .object({
        where: z.lazy(() => InvoiceWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => InvoiceUpdateWithoutProgramInputSchema),
            z.lazy(() => InvoiceUncheckedUpdateWithoutProgramInputSchema)
        ]),
        create: z.union([
            z.lazy(() => InvoiceCreateWithoutProgramInputSchema),
            z.lazy(() => InvoiceUncheckedCreateWithoutProgramInputSchema)
        ])
    })
    .strict()

export default InvoiceUpsertWithWhereUniqueWithoutProgramInputSchema
