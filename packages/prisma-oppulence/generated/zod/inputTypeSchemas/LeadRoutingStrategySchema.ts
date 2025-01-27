import { z } from 'zod'

export const LeadRoutingStrategySchema = z.enum(['round_robin', 'load_balanced', 'territory', 'skill_based', 'manual'])

export type LeadRoutingStrategyType = `${z.infer<typeof LeadRoutingStrategySchema>}`

export default LeadRoutingStrategySchema
