import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { InvoiceStatusSchema } from '../inputTypeSchemas/InvoiceStatusSchema'

/////////////////////////////////////////
// INVOICE SCHEMA
/////////////////////////////////////////

export const InvoiceSchema = z.object({
    status: InvoiceStatusSchema,
    id: z.string().cuid(),
    programId: z.string(),
    workspaceId: z.string(),
    number: z.string().nullish(),
    amount: z.number().int(),
    fee: z.number().int(),
    total: z.number().int(),
    receiptUrl: z.string().nullish(),
    createdAt: z.coerce.date(),
    bottomBlock: JsonValueSchema.nullable(),
    companyDetails: JsonValueSchema.nullable(),
    currency: z.string().nullish(),
    customerDetails: JsonValueSchema.nullable(),
    customerId: z.string().nullish(),
    customerName: z.string().nullish(),
    discount: z.number().nullish(),
    dueDate: z.coerce.date().nullish(),
    filePath: z.string().nullish(),
    fileSize: z.number().int().nullish(),
    fromDetails: JsonValueSchema.nullable(),
    internalNote: z.string().nullish(),
    invoiceNumber: z.string().nullish(),
    issueDate: z.coerce.date().nullish(),
    lineItems: JsonValueSchema.nullable(),
    note: z.string().nullish(),
    noteDetails: JsonValueSchema.nullable(),
    paidAt: z.coerce.date().nullish(),
    paymentDetails: JsonValueSchema.nullable(),
    reminderSentAt: z.coerce.date().nullish(),
    sentTo: z.string().nullish(),
    subtotal: z.number().nullish(),
    tax: z.number().nullish(),
    teamId: z.string().nullish(),
    token: z.string().nullish(),
    topBlock: JsonValueSchema.nullable(),
    updatedAt: z.coerce.date().nullish(),
    url: z.string().nullish(),
    userId: z.string().nullish(),
    vat: z.number().nullish(),
    viewedAt: z.coerce.date().nullish(),
    version: z.number().int(),
    language: z.string(),
    timezone: z.string(),
    tags: JsonValueSchema.nullable(),
    metadata: JsonValueSchema.nullable(),
    customFields: JsonValueSchema.nullable(),
    paymentMethod: z.string().nullish(),
    paymentStatus: z.string().nullish(),
    paymentDue: z.number().nullish(),
    partialPayments: JsonValueSchema.nullable(),
    refundAmount: z.number().nullish(),
    conversionRate: z.number().nullish(),
    processingFees: z.number().nullish(),
    profitMargin: z.number().nullish(),
    costBreakdown: JsonValueSchema.nullable(),
    autoRemind: z.boolean(),
    reminderSchedule: JsonValueSchema.nullable(),
    approvalStatus: z.string().nullish(),
    approvedBy: z.string().nullish(),
    approvedAt: z.coerce.date().nullish(),
    taxExempt: z.boolean(),
    taxExemptReason: z.string().nullish(),
    complianceNotes: JsonValueSchema.nullable(),
    auditTrail: JsonValueSchema.nullable(),
    templateId: z.string().nullish()
})

export type Invoice = z.infer<typeof InvoiceSchema>

/////////////////////////////////////////
// INVOICE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InvoiceOptionalDefaultsSchema = InvoiceSchema.merge(
    z.object({
        status: InvoiceStatusSchema.optional(),
        id: z.string().cuid().optional(),
        amount: z.number().int().optional(),
        fee: z.number().int().optional(),
        total: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        version: z.number().int().optional(),
        language: z.string().optional(),
        timezone: z.string().optional(),
        autoRemind: z.boolean().optional(),
        taxExempt: z.boolean().optional()
    })
)

export type InvoiceOptionalDefaults = z.infer<typeof InvoiceOptionalDefaultsSchema>

export default InvoiceSchema
