import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceAttachmentCreateWithoutInvoiceInputSchema } from './InvoiceAttachmentCreateWithoutInvoiceInputSchema'
import { InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema'
import { InvoiceAttachmentCreateOrConnectWithoutInvoiceInputSchema } from './InvoiceAttachmentCreateOrConnectWithoutInvoiceInputSchema'
import { InvoiceAttachmentUpsertWithWhereUniqueWithoutInvoiceInputSchema } from './InvoiceAttachmentUpsertWithWhereUniqueWithoutInvoiceInputSchema'
import { InvoiceAttachmentCreateManyInvoiceInputEnvelopeSchema } from './InvoiceAttachmentCreateManyInvoiceInputEnvelopeSchema'
import { InvoiceAttachmentWhereUniqueInputSchema } from './InvoiceAttachmentWhereUniqueInputSchema'
import { InvoiceAttachmentUpdateWithWhereUniqueWithoutInvoiceInputSchema } from './InvoiceAttachmentUpdateWithWhereUniqueWithoutInvoiceInputSchema'
import { InvoiceAttachmentUpdateManyWithWhereWithoutInvoiceInputSchema } from './InvoiceAttachmentUpdateManyWithWhereWithoutInvoiceInputSchema'
import { InvoiceAttachmentScalarWhereInputSchema } from './InvoiceAttachmentScalarWhereInputSchema'

export const InvoiceAttachmentUncheckedUpdateManyWithoutInvoiceNestedInputSchema: z.ZodType<Prisma.InvoiceAttachmentUncheckedUpdateManyWithoutInvoiceNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => InvoiceAttachmentCreateWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceAttachmentCreateWithoutInvoiceInputSchema).array(),
                    z.lazy(() => InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => InvoiceAttachmentCreateOrConnectWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceAttachmentCreateOrConnectWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => InvoiceAttachmentUpsertWithWhereUniqueWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceAttachmentUpsertWithWhereUniqueWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => InvoiceAttachmentCreateManyInvoiceInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema),
                    z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema),
                    z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema),
                    z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema),
                    z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => InvoiceAttachmentUpdateWithWhereUniqueWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceAttachmentUpdateWithWhereUniqueWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => InvoiceAttachmentUpdateManyWithWhereWithoutInvoiceInputSchema),
                    z.lazy(() => InvoiceAttachmentUpdateManyWithWhereWithoutInvoiceInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => InvoiceAttachmentScalarWhereInputSchema),
                    z.lazy(() => InvoiceAttachmentScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default InvoiceAttachmentUncheckedUpdateManyWithoutInvoiceNestedInputSchema
