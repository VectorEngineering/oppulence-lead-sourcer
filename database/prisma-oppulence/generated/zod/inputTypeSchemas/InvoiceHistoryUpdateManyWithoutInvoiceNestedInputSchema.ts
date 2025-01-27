import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceHistoryCreateWithoutInvoiceInputSchema } from './InvoiceHistoryCreateWithoutInvoiceInputSchema'
import { InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema'
import { InvoiceHistoryCreateOrConnectWithoutInvoiceInputSchema } from './InvoiceHistoryCreateOrConnectWithoutInvoiceInputSchema'
import { InvoiceHistoryUpsertWithWhereUniqueWithoutInvoiceInputSchema } from './InvoiceHistoryUpsertWithWhereUniqueWithoutInvoiceInputSchema'
import { InvoiceHistoryCreateManyInvoiceInputEnvelopeSchema } from './InvoiceHistoryCreateManyInvoiceInputEnvelopeSchema'
import { InvoiceHistoryWhereUniqueInputSchema } from './InvoiceHistoryWhereUniqueInputSchema'
import { InvoiceHistoryUpdateWithWhereUniqueWithoutInvoiceInputSchema } from './InvoiceHistoryUpdateWithWhereUniqueWithoutInvoiceInputSchema'
import { InvoiceHistoryUpdateManyWithWhereWithoutInvoiceInputSchema } from './InvoiceHistoryUpdateManyWithWhereWithoutInvoiceInputSchema'
import { InvoiceHistoryScalarWhereInputSchema } from './InvoiceHistoryScalarWhereInputSchema'

export const InvoiceHistoryUpdateManyWithoutInvoiceNestedInputSchema: z.ZodType<Prisma.InvoiceHistoryUpdateManyWithoutInvoiceNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InvoiceHistoryCreateWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceHistoryCreateWithoutInvoiceInputSchema).array(),
                    z.lazy(() => InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceHistoryUncheckedCreateWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => InvoiceHistoryCreateOrConnectWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceHistoryCreateOrConnectWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => InvoiceHistoryUpsertWithWhereUniqueWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceHistoryUpsertWithWhereUniqueWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => InvoiceHistoryCreateManyInvoiceInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => InvoiceHistoryWhereUniqueInputSchema), z.lazy(() => InvoiceHistoryWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => InvoiceHistoryWhereUniqueInputSchema), z.lazy(() => InvoiceHistoryWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => InvoiceHistoryWhereUniqueInputSchema), z.lazy(() => InvoiceHistoryWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => InvoiceHistoryWhereUniqueInputSchema), z.lazy(() => InvoiceHistoryWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => InvoiceHistoryUpdateWithWhereUniqueWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceHistoryUpdateWithWhereUniqueWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => InvoiceHistoryUpdateManyWithWhereWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceHistoryUpdateManyWithWhereWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => InvoiceHistoryScalarWhereInputSchema), z.lazy(() => InvoiceHistoryScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default InvoiceHistoryUpdateManyWithoutInvoiceNestedInputSchema
