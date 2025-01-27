import { z } from 'zod'

export const MatchingStrategySchema = z.enum(['EXACT', 'FUZZY', 'AMOUNT_ONLY'])

export type MatchingStrategyType = `${z.infer<typeof MatchingStrategySchema>}`

export default MatchingStrategySchema
