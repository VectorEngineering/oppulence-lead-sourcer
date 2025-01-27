import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { EnumInvoiceDeliveryTypeWithAggregatesFilterSchema } from './EnumInvoiceDeliveryTypeWithAggregatesFilterSchema'
import { InvoiceDeliveryTypeSchema } from './InvoiceDeliveryTypeSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema'
import { EnumInvoiceSizeNullableWithAggregatesFilterSchema } from './EnumInvoiceSizeNullableWithAggregatesFilterSchema'
import { InvoiceSizeSchema } from './InvoiceSizeSchema'
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'

export const InvoiceTemplateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InvoiceTemplateScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => InvoiceTemplateScalarWhereWithAggregatesInputSchema),
                z.lazy(() => InvoiceTemplateScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => InvoiceTemplateScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InvoiceTemplateScalarWhereWithAggregatesInputSchema),
                z.lazy(() => InvoiceTemplateScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        currency: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        customerLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        dateFormat: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        deliveryType: z
            .union([z.lazy(() => EnumInvoiceDeliveryTypeWithAggregatesFilterSchema), z.lazy(() => InvoiceDeliveryTypeSchema)])
            .optional(),
        descriptionLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        discountLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        dueDateLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        fromDetails: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        fromLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        includeDecimals: z
            .union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
            .optional()
            .nullable(),
        includeDiscount: z
            .union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
            .optional()
            .nullable(),
        includeQr: z
            .union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
            .optional()
            .nullable(),
        includeTax: z
            .union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
            .optional()
            .nullable(),
        includeUnits: z
            .union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
            .optional()
            .nullable(),
        includeVat: z
            .union([z.lazy(() => BoolNullableWithAggregatesFilterSchema), z.boolean()])
            .optional()
            .nullable(),
        invoiceNoLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        issueDateLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        logoUrl: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        noteLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        paymentDetails: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        paymentLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        priceLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        quantityLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        size: z
            .union([z.lazy(() => EnumInvoiceSizeNullableWithAggregatesFilterSchema), z.lazy(() => InvoiceSizeSchema)])
            .optional()
            .nullable(),
        taxLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        taxRate: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        projectId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        title: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        totalLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        totalSummaryLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        vatLabel: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        vatRate: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        version: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        isDefault: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        isArchived: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        language: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        tags: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        customFields: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        style: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        layout: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        fonts: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        colors: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        variables: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        sections: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        footerContent: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        headerContent: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        useCount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        lastUsedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable()
    })
    .strict()

export default InvoiceTemplateScalarWhereWithAggregatesInputSchema
