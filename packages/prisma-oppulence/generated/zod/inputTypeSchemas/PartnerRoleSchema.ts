import { z } from 'zod';

export const PartnerRoleSchema = z.enum(['owner','member']);

export type PartnerRoleType = `${z.infer<typeof PartnerRoleSchema>}`

export default PartnerRoleSchema;
