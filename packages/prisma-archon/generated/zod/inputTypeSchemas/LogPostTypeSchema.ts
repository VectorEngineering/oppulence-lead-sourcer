import { z } from 'zod';

export const LogPostTypeSchema = z.enum(['http','form','webhook','email']);

export type LogPostTypeType = `${z.infer<typeof LogPostTypeSchema>}`

export default LogPostTypeSchema;
