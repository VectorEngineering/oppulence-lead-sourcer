import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleStatusSchema } from './SaleStatusSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { CommissionTypeSchema } from './CommissionTypeSchema';
import { CommissionIntervalSchema } from './CommissionIntervalSchema';

export const SaleCreateManyPayoutInputSchema: z.ZodType<Prisma.SaleCreateManyPayoutInput> = z.object({
  id: z.string().cuid().optional(),
  programId: z.string(),
  partnerId: z.string(),
  customerId: z.string(),
  linkId: z.string(),
  clickId: z.string(),
  invoiceId: z.string().optional().nullable(),
  eventId: z.string(),
  amount: z.number().int(),
  currency: z.string(),
  paymentProcessor: z.string(),
  earnings: z.number().int().optional(),
  status: z.lazy(() => SaleStatusSchema).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  commissionAmount: z.number().int(),
  commissionType: z.lazy(() => CommissionTypeSchema),
  recurringCommission: z.boolean(),
  recurringInterval: z.lazy(() => CommissionIntervalSchema).optional().nullable(),
  recurringDuration: z.number().int().optional().nullable(),
  isLifetimeRecurring: z.boolean().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default SaleCreateManyPayoutInputSchema;
