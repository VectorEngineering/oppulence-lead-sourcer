import { z } from 'zod';

export const AccountOwnershipTypeSchema = z.enum(['individual','joint','business','trust']);

export type AccountOwnershipTypeType = `${z.infer<typeof AccountOwnershipTypeSchema>}`

export default AccountOwnershipTypeSchema;
