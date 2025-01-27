import { z } from 'zod';

export const LeadStageSchema = z.enum(['lead','qualified','negotiation','proposal','closed_won','closed_lost','onHold']);

export type LeadStageType = `${z.infer<typeof LeadStageSchema>}`

export default LeadStageSchema;
