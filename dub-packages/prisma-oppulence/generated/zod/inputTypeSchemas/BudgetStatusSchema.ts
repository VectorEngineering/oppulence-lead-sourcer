import { z } from 'zod';

export const BudgetStatusSchema = z.enum(['DRAFT','ACTIVE','UNDER_REVIEW','APPROVED','REJECTED','CLOSED']);

export type BudgetStatusType = `${z.infer<typeof BudgetStatusSchema>}`

export default BudgetStatusSchema;
