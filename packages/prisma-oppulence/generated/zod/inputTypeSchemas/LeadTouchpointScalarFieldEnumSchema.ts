import { z } from 'zod'

export const LeadTouchpointScalarFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'channel',
    'campaign',
    'content',
    'interaction',
    'timestamp',
    'isFirstTouch',
    'isLastTouch'
])

export default LeadTouchpointScalarFieldEnumSchema
