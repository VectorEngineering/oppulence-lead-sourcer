import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { InvoiceDeliveryTypeSchema } from '../inputTypeSchemas/InvoiceDeliveryTypeSchema'
import { InvoiceSizeSchema } from '../inputTypeSchemas/InvoiceSizeSchema'

/////////////////////////////////////////
// INVOICE TEMPLATE SCHEMA
/////////////////////////////////////////

export const InvoiceTemplateSchema = z.object({
    deliveryType: InvoiceDeliveryTypeSchema,
    size: InvoiceSizeSchema.nullish(),
    id: z.string().cuid(),
    createdAt: z.coerce.date(),
    currency: z.string().nullish(),
    customerLabel: z.string().nullish(),
    dateFormat: z.string().nullish(),
    descriptionLabel: z.string().nullish(),
    discountLabel: z.string().nullish(),
    dueDateLabel: z.string().nullish(),
    fromDetails: JsonValueSchema.nullable(),
    fromLabel: z.string().nullish(),
    includeDecimals: z.boolean().nullish(),
    includeDiscount: z.boolean().nullish(),
    includeQr: z.boolean().nullish(),
    includeTax: z.boolean().nullish(),
    includeUnits: z.boolean().nullish(),
    includeVat: z.boolean().nullish(),
    invoiceNoLabel: z.string().nullish(),
    issueDateLabel: z.string().nullish(),
    logoUrl: z.string().nullish(),
    noteLabel: z.string().nullish(),
    paymentDetails: JsonValueSchema.nullable(),
    paymentLabel: z.string().nullish(),
    priceLabel: z.string().nullish(),
    quantityLabel: z.string().nullish(),
    taxLabel: z.string().nullish(),
    taxRate: z.number().nullish(),
    projectId: z.string(),
    title: z.string().nullish(),
    totalLabel: z.string().nullish(),
    totalSummaryLabel: z.string().nullish(),
    vatLabel: z.string().nullish(),
    vatRate: z.number().nullish(),
    version: z.number().int(),
    isDefault: z.boolean(),
    isArchived: z.boolean(),
    language: z.string(),
    description: z.string().nullish(),
    tags: JsonValueSchema.nullable(),
    metadata: JsonValueSchema.nullable(),
    customFields: JsonValueSchema.nullable(),
    style: JsonValueSchema.nullable(),
    layout: JsonValueSchema.nullable(),
    fonts: JsonValueSchema.nullable(),
    colors: JsonValueSchema.nullable(),
    variables: JsonValueSchema.nullable(),
    sections: JsonValueSchema.nullable(),
    footerContent: JsonValueSchema.nullable(),
    headerContent: JsonValueSchema.nullable(),
    useCount: z.number().int(),
    lastUsedAt: z.coerce.date().nullish()
})

export type InvoiceTemplate = z.infer<typeof InvoiceTemplateSchema>

/////////////////////////////////////////
// INVOICE TEMPLATE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InvoiceTemplateOptionalDefaultsSchema = InvoiceTemplateSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        version: z.number().int().optional(),
        isDefault: z.boolean().optional(),
        isArchived: z.boolean().optional(),
        language: z.string().optional(),
        useCount: z.number().int().optional()
    })
)

export type InvoiceTemplateOptionalDefaults = z.infer<typeof InvoiceTemplateOptionalDefaultsSchema>

export default InvoiceTemplateSchema
