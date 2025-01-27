import { z } from 'zod'

export const DataResidencySchema = z.enum(['US', 'EU', 'UK', 'APAC', 'CUSTOM'])

export type DataResidencyType = `${z.infer<typeof DataResidencySchema>}`

export default DataResidencySchema
