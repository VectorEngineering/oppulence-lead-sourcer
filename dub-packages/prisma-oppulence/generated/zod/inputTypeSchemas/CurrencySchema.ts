import { z } from 'zod';

export const CurrencySchema = z.enum(['USD','GBP','EUR']);

export type CurrencyType = `${z.infer<typeof CurrencySchema>}`

export default CurrencySchema;
