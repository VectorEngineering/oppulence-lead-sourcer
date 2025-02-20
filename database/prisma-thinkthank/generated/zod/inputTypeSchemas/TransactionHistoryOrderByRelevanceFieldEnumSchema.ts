import { z } from 'zod';

export const TransactionHistoryOrderByRelevanceFieldEnumSchema = z.enum(['id','transactionId','action','description','createdBy']);

export default TransactionHistoryOrderByRelevanceFieldEnumSchema;
