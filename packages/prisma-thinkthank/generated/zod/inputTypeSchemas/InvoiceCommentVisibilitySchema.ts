import { z } from 'zod';

export const InvoiceCommentVisibilitySchema = z.enum(['internal','external','private','restricted']);

export type InvoiceCommentVisibilityType = `${z.infer<typeof InvoiceCommentVisibilitySchema>}`

export default InvoiceCommentVisibilitySchema;
