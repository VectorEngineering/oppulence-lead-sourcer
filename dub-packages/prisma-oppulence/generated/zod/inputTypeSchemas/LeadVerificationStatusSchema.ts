import { z } from 'zod';

export const LeadVerificationStatusSchema = z.enum(['unverified','pending','verified','flagged','rejected']);

export type LeadVerificationStatusType = `${z.infer<typeof LeadVerificationStatusSchema>}`

export default LeadVerificationStatusSchema;
