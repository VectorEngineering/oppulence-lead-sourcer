import { z } from 'zod';

export const IntegrationTypeSchema = z.enum(['crm','email','calendar','chat','document','analytics','custom']);

export type IntegrationTypeType = `${z.infer<typeof IntegrationTypeSchema>}`

export default IntegrationTypeSchema;
