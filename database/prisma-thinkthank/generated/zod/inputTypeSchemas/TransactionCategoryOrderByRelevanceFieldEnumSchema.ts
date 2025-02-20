import { z } from 'zod';

export const TransactionCategoryOrderByRelevanceFieldEnumSchema = z.enum(['id','name','slug','description','color','icon','parentId','path','projectId','taxCode']);

export default TransactionCategoryOrderByRelevanceFieldEnumSchema;
