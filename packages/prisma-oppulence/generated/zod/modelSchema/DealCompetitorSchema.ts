import { z } from 'zod';
import { DealCompetitorStatusSchema } from '../inputTypeSchemas/DealCompetitorStatusSchema'
import { DealCompetitorThreatLevelSchema } from '../inputTypeSchemas/DealCompetitorThreatLevelSchema'

/////////////////////////////////////////
// DEAL COMPETITOR SCHEMA
/////////////////////////////////////////

export const DealCompetitorSchema = z.object({
  status: DealCompetitorStatusSchema.nullish(),
  threatLevel: DealCompetitorThreatLevelSchema.nullish(),
  id: z.string().cuid(),
  dealId: z.string(),
  name: z.string(),
  strengths: z.string().nullish(),
  weaknesses: z.string().nullish(),
  strategy: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type DealCompetitor = z.infer<typeof DealCompetitorSchema>

/////////////////////////////////////////
// DEAL COMPETITOR OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DealCompetitorOptionalDefaultsSchema = DealCompetitorSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type DealCompetitorOptionalDefaults = z.infer<typeof DealCompetitorOptionalDefaultsSchema>

export default DealCompetitorSchema;
