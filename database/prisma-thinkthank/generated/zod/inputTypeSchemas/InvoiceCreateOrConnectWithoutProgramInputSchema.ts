import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'
import { InvoiceCreateWithoutProgramInputSchema } from './InvoiceCreateWithoutProgramInputSchema'
import { InvoiceUncheckedCreateWithoutProgramInputSchema } from './InvoiceUncheckedCreateWithoutProgramInputSchema'

export const InvoiceCreateOrConnectWithoutProgramInputSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutProgramInput> = z
    .object({
        where: z.lazy(() => InvoiceWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => InvoiceCreateWithoutProgramInputSchema),
            z.lazy(() => InvoiceUncheckedCreateWithoutProgramInputSchema)
        ])
    })
    .strict()

export default InvoiceCreateOrConnectWithoutProgramInputSchema
