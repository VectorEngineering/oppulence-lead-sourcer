import { z } from 'zod';

export const AdminRoleSchema = z.enum(['SoftwareEngineer','ProductManager','CustomerSuccess','Marketing','Sales','Support','Founder','CTO','CEO','CFO','COO','CMO','Other']);

export type AdminRoleType = `${z.infer<typeof AdminRoleSchema>}`

export default AdminRoleSchema;
