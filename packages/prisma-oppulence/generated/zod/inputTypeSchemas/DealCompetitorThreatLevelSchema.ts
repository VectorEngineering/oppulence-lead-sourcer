import { z } from 'zod';

export const DealCompetitorThreatLevelSchema = z.enum(['high','medium','low']);

export type DealCompetitorThreatLevelType = `${z.infer<typeof DealCompetitorThreatLevelSchema>}`

export default DealCompetitorThreatLevelSchema;
