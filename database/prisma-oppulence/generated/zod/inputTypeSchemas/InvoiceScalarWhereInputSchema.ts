import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { EnumInvoiceStatusFilterSchema } from './EnumInvoiceStatusFilterSchema'
import { InvoiceStatusSchema } from './InvoiceStatusSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { BoolFilterSchema } from './BoolFilterSchema'

export const InvoiceScalarWhereInputSchema: z.ZodType<Prisma.InvoiceScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => InvoiceScalarWhereInputSchema), z.lazy(() => InvoiceScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => InvoiceScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => InvoiceScalarWhereInputSchema), z.lazy(() => InvoiceScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        programId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        workspaceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        number: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => EnumInvoiceStatusFilterSchema), z.lazy(() => InvoiceStatusSchema)]).optional(),
        amount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        fee: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        total: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        receiptUrl: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        bottomBlock: z.lazy(() => JsonNullableFilterSchema).optional(),
        companyDetails: z.lazy(() => JsonNullableFilterSchema).optional(),
        currency: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        customerDetails: z.lazy(() => JsonNullableFilterSchema).optional(),
        customerId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        customerName: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        discount: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        dueDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        filePath: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        fileSize: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        fromDetails: z.lazy(() => JsonNullableFilterSchema).optional(),
        internalNote: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        invoiceNumber: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        issueDate: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        lineItems: z.lazy(() => JsonNullableFilterSchema).optional(),
        note: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        noteDetails: z.lazy(() => JsonNullableFilterSchema).optional(),
        paidAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        paymentDetails: z.lazy(() => JsonNullableFilterSchema).optional(),
        reminderSentAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        sentTo: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        subtotal: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        tax: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        teamId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        template: z.lazy(() => JsonNullableFilterSchema).optional(),
        token: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        topBlock: z.lazy(() => JsonNullableFilterSchema).optional(),
        updatedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        url: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        userId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        vat: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        viewedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        version: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        language: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        timezone: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        tags: z.lazy(() => JsonNullableFilterSchema).optional(),
        metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
        customFields: z.lazy(() => JsonNullableFilterSchema).optional(),
        paymentMethod: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        paymentStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        paymentDue: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        partialPayments: z.lazy(() => JsonNullableFilterSchema).optional(),
        refundAmount: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        conversionRate: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        processingFees: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        profitMargin: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        costBreakdown: z.lazy(() => JsonNullableFilterSchema).optional(),
        autoRemind: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        reminderSchedule: z.lazy(() => JsonNullableFilterSchema).optional(),
        approvalStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        approvedBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        approvedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        taxExempt: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        taxExemptReason: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        complianceNotes: z.lazy(() => JsonNullableFilterSchema).optional(),
        auditTrail: z.lazy(() => JsonNullableFilterSchema).optional()
    })
    .strict()

export default InvoiceScalarWhereInputSchema
