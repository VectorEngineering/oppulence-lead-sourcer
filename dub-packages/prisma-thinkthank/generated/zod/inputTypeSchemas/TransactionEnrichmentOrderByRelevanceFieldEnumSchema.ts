import { z } from 'zod';

export const TransactionEnrichmentOrderByRelevanceFieldEnumSchema = z.enum(['id','projectId','name','description','categorySlug','website','merchantId','merchantName','merchantCategory','merchantLocation','merchantLogo','source','status','version','sentiment']);

export default TransactionEnrichmentOrderByRelevanceFieldEnumSchema;
