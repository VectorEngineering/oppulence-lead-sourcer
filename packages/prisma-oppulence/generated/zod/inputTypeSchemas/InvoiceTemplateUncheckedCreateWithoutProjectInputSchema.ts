import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceDeliveryTypeSchema } from './InvoiceDeliveryTypeSchema'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { InvoiceSizeSchema } from './InvoiceSizeSchema'

export const InvoiceTemplateUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.InvoiceTemplateUncheckedCreateWithoutProjectInput> =
    z
        .object({
            id: z.string().cuid().optional(),
            createdAt: z.coerce.date(),
            currency: z.string().optional().nullable(),
            customerLabel: z.string().optional().nullable(),
            dateFormat: z.string().optional().nullable(),
            deliveryType: z.lazy(() => InvoiceDeliveryTypeSchema),
            descriptionLabel: z.string().optional().nullable(),
            discountLabel: z.string().optional().nullable(),
            dueDateLabel: z.string().optional().nullable(),
            fromDetails: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            fromLabel: z.string().optional().nullable(),
            includeDecimals: z.boolean().optional().nullable(),
            includeDiscount: z.boolean().optional().nullable(),
            includeQr: z.boolean().optional().nullable(),
            includeTax: z.boolean().optional().nullable(),
            includeUnits: z.boolean().optional().nullable(),
            includeVat: z.boolean().optional().nullable(),
            invoiceNoLabel: z.string().optional().nullable(),
            issueDateLabel: z.string().optional().nullable(),
            logoUrl: z.string().optional().nullable(),
            noteLabel: z.string().optional().nullable(),
            paymentDetails: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            paymentLabel: z.string().optional().nullable(),
            priceLabel: z.string().optional().nullable(),
            quantityLabel: z.string().optional().nullable(),
            size: z
                .lazy(() => InvoiceSizeSchema)
                .optional()
                .nullable(),
            taxLabel: z.string().optional().nullable(),
            taxRate: z.number().optional().nullable(),
            title: z.string().optional().nullable(),
            totalLabel: z.string().optional().nullable(),
            totalSummaryLabel: z.string().optional().nullable(),
            vatLabel: z.string().optional().nullable(),
            vatRate: z.number().optional().nullable(),
            version: z.number().int().optional(),
            isDefault: z.boolean().optional(),
            isArchived: z.boolean().optional(),
            language: z.string().optional().nullable(),
            description: z.string().optional().nullable(),
            tags: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            customFields: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            style: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            layout: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            fonts: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            colors: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            variables: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            sections: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            footerContent: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            headerContent: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            useCount: z.number().int().optional(),
            lastUsedAt: z.coerce.date().optional().nullable()
        })
        .strict()

export default InvoiceTemplateUncheckedCreateWithoutProjectInputSchema
