import { z } from 'zod';

export const LeadCategoryOrderByRelevanceFieldEnumSchema = z.enum(['id','name','slug','description','color','icon','parentId','path','projectId','taxCode']);

export default LeadCategoryOrderByRelevanceFieldEnumSchema;
