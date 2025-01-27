import { z } from 'zod';

export const PayoutTypeSchema = z.enum(['clicks','leads','sales','custom']);

export type PayoutTypeType = `${z.infer<typeof PayoutTypeSchema>}`

export default PayoutTypeSchema;
