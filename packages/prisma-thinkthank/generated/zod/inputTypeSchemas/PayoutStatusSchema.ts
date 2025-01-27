import { z } from 'zod';

export const PayoutStatusSchema = z.enum(['pending','processing','completed','failed']);

export type PayoutStatusType = `${z.infer<typeof PayoutStatusSchema>}`

export default PayoutStatusSchema;
