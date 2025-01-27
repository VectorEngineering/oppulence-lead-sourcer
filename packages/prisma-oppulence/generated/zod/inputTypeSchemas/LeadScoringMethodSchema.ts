import { z } from 'zod';

export const LeadScoringMethodSchema = z.enum(['basic','weighted','predictive','custom']);

export type LeadScoringMethodType = `${z.infer<typeof LeadScoringMethodSchema>}`

export default LeadScoringMethodSchema;
