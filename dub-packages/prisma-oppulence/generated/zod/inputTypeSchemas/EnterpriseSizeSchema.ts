import { z } from 'zod';

export const EnterpriseSizeSchema = z.enum(['SMALL_ENTERPRISE','MID_ENTERPRISE','LARGE_ENTERPRISE','GLOBAL_ENTERPRISE']);

export type EnterpriseSizeType = `${z.infer<typeof EnterpriseSizeSchema>}`

export default EnterpriseSizeSchema;
