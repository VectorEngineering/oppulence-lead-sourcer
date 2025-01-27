import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { EnumInvoiceStatusWithAggregatesFilterSchema } from './EnumInvoiceStatusWithAggregatesFilterSchema'
import { InvoiceStatusSchema } from './InvoiceStatusSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema'
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'

export const InvoiceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InvoiceScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => InvoiceScalarWhereWithAggregatesInputSchema),
                z.lazy(() => InvoiceScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => InvoiceScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => InvoiceScalarWhereWithAggregatesInputSchema),
                z.lazy(() => InvoiceScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        programId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        workspaceId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        number: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => EnumInvoiceStatusWithAggregatesFilterSchema), z.lazy(() => InvoiceStatusSchema)]).optional(),
        amount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        fee: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        total: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        receiptUrl: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        bottomBlock: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        companyDetails: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        currency: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        customerDetails: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        customerId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        customerName: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        discount: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        dueDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        filePath: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        fileSize: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        fromDetails: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        internalNote: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        invoiceNumber: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        issueDate: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lineItems: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        note: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        noteDetails: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        paidAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        paymentDetails: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        reminderSentAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        sentTo: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        subtotal: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        tax: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        teamId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        template: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        token: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        topBlock: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        url: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        userId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        vat: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        viewedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        version: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        language: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        timezone: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        tags: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        customFields: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        paymentMethod: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        paymentStatus: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        paymentDue: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        partialPayments: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        refundAmount: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        conversionRate: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        processingFees: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        profitMargin: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        costBreakdown: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        autoRemind: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        reminderSchedule: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        approvalStatus: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        approvedBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        approvedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        taxExempt: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        taxExemptReason: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        complianceNotes: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
        auditTrail: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional()
    })
    .strict()

export default InvoiceScalarWhereWithAggregatesInputSchema
