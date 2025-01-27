import { z } from 'zod';

export const ComplianceStatusSchema = z.enum(['PENDING','IN_PROGRESS','COMPLIANT','NON_COMPLIANT','REQUIRES_ACTION']);

export type ComplianceStatusType = `${z.infer<typeof ComplianceStatusSchema>}`

export default ComplianceStatusSchema;
