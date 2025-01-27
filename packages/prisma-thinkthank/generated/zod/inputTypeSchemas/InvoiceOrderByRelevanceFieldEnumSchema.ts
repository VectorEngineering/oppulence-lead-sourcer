import { z } from 'zod';

export const InvoiceOrderByRelevanceFieldEnumSchema = z.enum(['id','programId','workspaceId','number','receiptUrl','currency','customerId','customerName','filePath','internalNote','invoiceNumber','note','sentTo','teamId','token','url','userId','language','timezone','paymentMethod','paymentStatus','approvalStatus','approvedBy','taxExemptReason','templateId']);

export default InvoiceOrderByRelevanceFieldEnumSchema;
