import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutCreateWithoutInvoiceInputSchema } from './PayoutCreateWithoutInvoiceInputSchema'
import { PayoutUncheckedCreateWithoutInvoiceInputSchema } from './PayoutUncheckedCreateWithoutInvoiceInputSchema'
import { PayoutCreateOrConnectWithoutInvoiceInputSchema } from './PayoutCreateOrConnectWithoutInvoiceInputSchema'
import { PayoutCreateManyInvoiceInputEnvelopeSchema } from './PayoutCreateManyInvoiceInputEnvelopeSchema'
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema'

export const PayoutUncheckedCreateNestedManyWithoutInvoiceInputSchema: z.ZodType<Prisma.PayoutUncheckedCreateNestedManyWithoutInvoiceInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PayoutCreateWithoutInvoiceInputSchema),
                    z.lazy(() => PayoutCreateWithoutInvoiceInputSchema).array(),
                    z.lazy(() => PayoutUncheckedCreateWithoutInvoiceInputSchema),
                    z.lazy(() => PayoutUncheckedCreateWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => PayoutCreateOrConnectWithoutInvoiceInputSchema),
                    z.lazy(() => PayoutCreateOrConnectWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => PayoutCreateManyInvoiceInputEnvelopeSchema).optional(),
            connect: z.union([z.lazy(() => PayoutWhereUniqueInputSchema), z.lazy(() => PayoutWhereUniqueInputSchema).array()]).optional()
        })
        .strict()

export default PayoutUncheckedCreateNestedManyWithoutInvoiceInputSchema
