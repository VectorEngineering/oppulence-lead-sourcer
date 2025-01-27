import { z } from 'zod';

export const DealStatusSchema = z.enum(['active','won','lost','abandoned','delayed']);

export type DealStatusType = `${z.infer<typeof DealStatusSchema>}`

export default DealStatusSchema;
