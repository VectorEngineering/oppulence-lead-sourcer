import { z } from 'zod';

export const InvoiceDeliveryTypeSchema = z.enum(['create','create_and_send','send','schedule','auto_send']);

export type InvoiceDeliveryTypeType = `${z.infer<typeof InvoiceDeliveryTypeSchema>}`

export default InvoiceDeliveryTypeSchema;
