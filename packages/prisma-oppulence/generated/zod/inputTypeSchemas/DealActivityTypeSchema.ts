import { z } from 'zod';

export const DealActivityTypeSchema = z.enum(['call','email','meeting','note','other']);

export type DealActivityTypeType = `${z.infer<typeof DealActivityTypeSchema>}`

export default DealActivityTypeSchema;
