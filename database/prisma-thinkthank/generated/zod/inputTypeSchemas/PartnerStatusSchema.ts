import { z } from 'zod'

export const PartnerStatusSchema = z.enum(['default', 'verified', 'featured'])

export type PartnerStatusType = `${z.infer<typeof PartnerStatusSchema>}`

export default PartnerStatusSchema
