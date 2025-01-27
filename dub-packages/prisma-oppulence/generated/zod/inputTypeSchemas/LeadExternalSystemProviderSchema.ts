import { z } from 'zod';

export const LeadExternalSystemProviderSchema = z.enum(['salesforce','hubspot','zoho','piperun','other']);

export type LeadExternalSystemProviderType = `${z.infer<typeof LeadExternalSystemProviderSchema>}`

export default LeadExternalSystemProviderSchema;
