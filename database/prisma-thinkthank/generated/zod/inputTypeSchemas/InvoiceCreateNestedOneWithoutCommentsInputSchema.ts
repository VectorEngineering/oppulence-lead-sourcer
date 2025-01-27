import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCreateWithoutCommentsInputSchema } from './InvoiceCreateWithoutCommentsInputSchema'
import { InvoiceUncheckedCreateWithoutCommentsInputSchema } from './InvoiceUncheckedCreateWithoutCommentsInputSchema'
import { InvoiceCreateOrConnectWithoutCommentsInputSchema } from './InvoiceCreateOrConnectWithoutCommentsInputSchema'
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema'

export const InvoiceCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.InvoiceCreateNestedOneWithoutCommentsInput> = z
    .object({
        create: z
            .union([z.lazy(() => InvoiceCreateWithoutCommentsInputSchema), z.lazy(() => InvoiceUncheckedCreateWithoutCommentsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutCommentsInputSchema).optional(),
        connect: z.lazy(() => InvoiceWhereUniqueInputSchema).optional()
    })
    .strict()

export default InvoiceCreateNestedOneWithoutCommentsInputSchema
