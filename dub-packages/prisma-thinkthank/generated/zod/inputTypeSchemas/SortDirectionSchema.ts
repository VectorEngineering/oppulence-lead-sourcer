import { z } from 'zod';

export const SortDirectionSchema = z.enum(['asc','desc']);

export type SortDirectionType = `${z.infer<typeof SortDirectionSchema>}`

export default SortDirectionSchema;
