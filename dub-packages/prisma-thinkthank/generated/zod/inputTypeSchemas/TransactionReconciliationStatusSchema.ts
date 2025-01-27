import { z } from 'zod';

export const TransactionReconciliationStatusSchema = z.enum(['unreconciled','inProgress','matched','reconciled','disputed','ignored']);

export type TransactionReconciliationStatusType = `${z.infer<typeof TransactionReconciliationStatusSchema>}`

export default TransactionReconciliationStatusSchema;
