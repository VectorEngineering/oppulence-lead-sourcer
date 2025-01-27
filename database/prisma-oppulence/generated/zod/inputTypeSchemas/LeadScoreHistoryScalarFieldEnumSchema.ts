import { z } from 'zod'

export const LeadScoreHistoryScalarFieldEnumSchema = z.enum(['id', 'leadScoreId', 'previousScore', 'newScore', 'changeReason', 'timestamp'])

export default LeadScoreHistoryScalarFieldEnumSchema
