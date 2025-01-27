import { z } from 'zod'

export const InvoiceTemplateOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'currency',
    'customerLabel',
    'dateFormat',
    'descriptionLabel',
    'discountLabel',
    'dueDateLabel',
    'fromLabel',
    'invoiceNoLabel',
    'issueDateLabel',
    'logoUrl',
    'noteLabel',
    'paymentLabel',
    'priceLabel',
    'quantityLabel',
    'taxLabel',
    'projectId',
    'title',
    'totalLabel',
    'totalSummaryLabel',
    'vatLabel',
    'language',
    'description'
])

export default InvoiceTemplateOrderByRelevanceFieldEnumSchema
