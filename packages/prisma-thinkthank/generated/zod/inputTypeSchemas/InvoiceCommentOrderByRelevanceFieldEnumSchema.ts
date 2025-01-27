import { z } from 'zod';

export const InvoiceCommentOrderByRelevanceFieldEnumSchema = z.enum(['id','invoiceId','content','title','priority','status','parentId','threadPath','resolvedBy','createdBy','updatedBy']);

export default InvoiceCommentOrderByRelevanceFieldEnumSchema;
