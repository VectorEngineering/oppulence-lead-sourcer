import { z } from 'zod';

export const LeadCategoryScalarFieldEnumSchema = z.enum(['id','name','slug','description','color','icon','parentId','path','level','isSystem','isActive','metadata','projectId','budgetLimit','warningThreshold','trackingEnabled','vatRate','taxCode','taxDeductible','createdAt','updatedAt']);

export default LeadCategoryScalarFieldEnumSchema;
