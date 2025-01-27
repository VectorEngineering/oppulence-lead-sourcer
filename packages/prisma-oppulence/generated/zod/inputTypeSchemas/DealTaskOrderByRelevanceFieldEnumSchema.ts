import { z } from 'zod';

export const DealTaskOrderByRelevanceFieldEnumSchema = z.enum(['id','dealId','title','description','assignedToId']);

export default DealTaskOrderByRelevanceFieldEnumSchema;
