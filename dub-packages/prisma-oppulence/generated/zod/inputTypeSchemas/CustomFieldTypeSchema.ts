import { z } from 'zod';

export const CustomFieldTypeSchema = z.enum(['text','number','date','boolean','select','multi_select','user','currency']);

export type CustomFieldTypeType = `${z.infer<typeof CustomFieldTypeSchema>}`

export default CustomFieldTypeSchema;
