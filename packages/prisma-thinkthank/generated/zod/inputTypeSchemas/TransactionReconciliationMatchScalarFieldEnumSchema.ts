import { z } from 'zod';

export const TransactionReconciliationMatchScalarFieldEnumSchema = z.enum(['id','transactionId','matchedTransactionId','confidence','matchType','status','notes','metadata','createdAt','updatedAt']);

export default TransactionReconciliationMatchScalarFieldEnumSchema;
