import { z } from 'zod';

export const InvoiceScalarFieldEnumSchema = z.enum(['id','programId','workspaceId','number','status','amount','fee','total','receiptUrl','createdAt','bottomBlock','companyDetails','currency','customerDetails','customerId','customerName','discount','dueDate','filePath','fileSize','fromDetails','internalNote','invoiceNumber','issueDate','lineItems','note','noteDetails','paidAt','paymentDetails','reminderSentAt','sentTo','subtotal','tax','teamId','token','topBlock','updatedAt','url','userId','vat','viewedAt','version','language','timezone','tags','metadata','customFields','paymentMethod','paymentStatus','paymentDue','partialPayments','refundAmount','conversionRate','processingFees','profitMargin','costBreakdown','autoRemind','reminderSchedule','approvalStatus','approvedBy','approvedAt','taxExempt','taxExemptReason','complianceNotes','auditTrail','templateId']);

export default InvoiceScalarFieldEnumSchema;
