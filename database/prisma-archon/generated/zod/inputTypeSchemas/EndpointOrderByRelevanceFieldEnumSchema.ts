import { z } from 'zod'

export const EndpointOrderByRelevanceFieldEnumSchema = z.enum(['id', 'userId', 'name', 'webhook', 'successUrl', 'failUrl', 'token'])

export default EndpointOrderByRelevanceFieldEnumSchema
