import { z } from 'zod';

export const DealProductOrderByRelevanceFieldEnumSchema = z.enum(['id','dealId','productId','description']);

export default DealProductOrderByRelevanceFieldEnumSchema;
