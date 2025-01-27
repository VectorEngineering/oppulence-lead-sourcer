import { z } from 'zod';

export const CommissionIntervalSchema = z.enum(['month','year']);

export type CommissionIntervalType = `${z.infer<typeof CommissionIntervalSchema>}`

export default CommissionIntervalSchema;
