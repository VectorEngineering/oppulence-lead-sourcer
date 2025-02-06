import { z } from 'zod';

export const RetentionPolicySchema = z.enum(['none','short_term','medium_term','long_term','permanent','custom']);

export type RetentionPolicyType = `${z.infer<typeof RetentionPolicySchema>}`

export default RetentionPolicySchema;
