import { z } from 'zod';

export const TransactionCategoryScalarFieldEnumSchema = z.enum(['id','name','slug','description','color','icon','parentId','path','level','isSystem','isActive','metadata','projectId','budgetLimit','warningThreshold','trackingEnabled','vatRate','taxCode','taxDeductible','createdAt','updatedAt']);

export default TransactionCategoryScalarFieldEnumSchema;
