import { z } from 'zod'

export const PartnerOrderByRelevanceFieldEnumSchema = z.enum(['id', 'name', 'email', 'image', 'bio', 'country', 'stripeConnectId'])

export default PartnerOrderByRelevanceFieldEnumSchema
